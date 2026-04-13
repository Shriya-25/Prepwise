import { NextRequest, NextResponse } from "next/server";

type Question = {
  id: string;
  text: string;
  category: string;
};

// Generate questions based on role and company
// This is a placeholder implementation - can be enhanced with AI/LLM later
function generateQuestions(role: string, company?: string): Question[] {
  const roleSpecificQuestions: Record<string, string[]> = {
    "Software Engineer": [
      "Tell me about a challenging bug you've debugged recently.",
      "How do you approach system design for scalability?",
      "Describe your experience with version control and collaboration.",
      "What's your process for code reviews?",
      "How do you stay updated with new technologies?",
    ],
    "Frontend Developer": [
      "How do you optimize web performance in your applications?",
      "Describe your approach to responsive design.",
      "What's your experience with state management?",
      "How do you ensure accessibility in your projects?",
      "Tell me about a complex UI component you've built.",
    ],
    "Backend Developer": [
      "How do you design RESTful APIs?",
      "Describe your experience with database optimization.",
      "How do you handle authentication and security?",
      "What's your approach to microservices?",
      "Tell me about handling high-traffic scenarios.",
    ],
    "Full Stack Developer": [
      "How do you balance frontend and backend responsibilities?",
      "Describe a end-to-end feature you've implemented.",
      "What's your deployment and CI/CD strategy?",
      "How do you manage state across client and server?",
      "Tell me about a performance bottleneck you've resolved.",
    ],
    "Data Analyst": [
      "How do you approach data cleaning and validation?",
      "Describe your experience with data visualization tools.",
      "What statistical methods do you commonly use?",
      "How do you communicate insights to stakeholders?",
      "Tell me about a complex analysis project.",
    ],
    "Product Manager": [
      "How do you prioritize features in a product roadmap?",
      "Describe your approach to user research.",
      "How do you handle conflicting stakeholder requirements?",
      "What metrics do you track for product success?",
      "Tell me about a product launch you've managed.",
    ],
    "UI/UX Designer": [
      "Walk me through your design process.",
      "How do you conduct user testing?",
      "Describe a time you had to balance aesthetics with usability.",
      "What's your approach to creating design systems?",
      "How do you collaborate with developers?",
    ],
    "DevOps Engineer": [
      "How do you approach infrastructure as code?",
      "Describe your experience with container orchestration.",
      "What's your monitoring and alerting strategy?",
      "How do you handle incident response?",
      "Tell me about automating deployment pipelines.",
    ],
  };

  // Get role-specific questions or use generic ones
  const baseQuestions = roleSpecificQuestions[role] || [
    "Tell me about yourself and your background.",
    "What interests you about this role?",
    "Describe a challenging project you've worked on.",
    "How do you handle tight deadlines and pressure?",
    "What are your career goals for the next few years?",
  ];

  // Add company-specific contextualization if provided
  const questions: Question[] = baseQuestions.map((text, index) => {
    let questionText = text;
    if (company && index === 1) {
      questionText = `What interests you about working at ${company} as a ${role}?`;
    }
    
    return {
      id: `q-${Date.now()}-${index}`,
      text: questionText,
      category: index === 0 ? "introduction" : index === baseQuestions.length - 1 ? "closing" : "technical",
    };
  });

  return questions;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { role, company } = body;

    // Validate required fields
    if (!role || typeof role !== "string" || role.trim() === "") {
      return NextResponse.json(
        { error: "Role is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Generate questions
    const questions = generateQuestions(role.trim(), company?.trim());

    return NextResponse.json({
      success: true,
      data: {
        role: role.trim(),
        company: company?.trim() || null,
        questions,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate questions. Please try again." },
      { status: 500 }
    );
  }
}
