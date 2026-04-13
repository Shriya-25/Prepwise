# Prepwise

Prepwise is a full-stack mock interview preparation platform that helps users practice structured interview rounds, get AI-generated feedback, and track progress over time.

## Features

- Role-based interview question generation
- Timed interview experience with answer capture
- AI-powered interview evaluation and feedback summary
- Analytics dashboard for interview history and score trends
- Detailed report view with PDF download
- Authentication-aware protected routes

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Firebase Auth + Firestore
- Node.js backend service for AI integration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Project Structure

- `app/` - frontend pages, API routes, and protected flows
- `components/` - shared UI components
- `lib/` - Firebase and auth helper utilities
- `backend/` - backend API service and AI route handlers

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run lint checks
