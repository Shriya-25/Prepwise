# Prepwise

Prepwise is a mock interview preparation platform with guided interview sessions, structured feedback views, profile settings, and analytics-ready flows.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- Firebase Authentication
- Firebase Firestore

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
cp .env.example .env.local
```

3. Fill all Firebase values in `.env.local`.

4. Start development server:

```bash
npm run dev
```

5. Open http://localhost:3000

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: create production build
- `npm run start`: start production server
- `npm run lint`: run ESLint

## Current Product Areas

- Authentication: email/password and Google sign-in
- Interview flow: setup, question-by-question UI, processing, feedback, report
- Profile: editable user details and preferences
- Aptitude: curated learning resources

## Notes

- Firebase environment variables are required; the app will fail fast when missing.
- Static feedback/report content currently acts as seed UI and should be replaced with generated data in future iterations.
