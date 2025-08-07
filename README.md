# Subtracker

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/-CSS-purple?style=for-the-badge&logo=css3)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=for-the-badge&logo=typescript)

## Description

Subtracker is a modern subscription tracking application designed to help users manage their recurring subscriptions to services such as Netflix, Azure, and more. It combines the functionality of a calendar and calculator, featuring a Gantt chart for visualizing subscription costs on a monthly and annual basis, along with total calculations. Users can create personal accounts to securely store and separate their data in a database.

## Features

- **Subscription Management**: Add, edit, and remove subscriptions with details like service name, cost, billing cycle, and start date.
- **Cost Visualization**: Interactive Gantt chart displaying subscription timelines and costs.
- **Calculations**: Automatic computation of monthly and annual totals for individual subscriptions and overall.
- **User Accounts**: Secure authentication to keep user data private and persistent.
- **Responsive Design**: Modern, elegant UI/UX that is user-friendly and accessible on all devices.

## Tech Stack

- **Frontend**: Next.js (React framework for server-side rendering and static site generation)
- **Backend**: Express.js (deployed serverless on Vercel for API endpoints)
- **Database**: PostgreSQL managed via Supabase

## Design Principles

The application follows a modern, elegant, and pleasing UI/UX design that prioritizes simplicity and intuitiveness, making it accessible for users of all ages and technical expertise. It is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices.

## Hosting

The application is hosted using serverless architecture for scalability and cost-efficiency:

- **Vercel (Free Tier)**: Handles both frontend and backend deployment.
  - **Frontend Configuration**: Deploy the Next.js app directly from the repository. Vercel automatically detects and configures Next.js projects. Set up custom domains if needed via Vercel's dashboard.
  - **Backend Configuration**: The Express.js backend is deployed as serverless functions. In the `vercel.json` file, configure routes to point to the Express entry point (e.g., `api/index.js`). Use environment variables for secrets like database URLs. Example `vercel.json`:
    ```
    {
      "version": 2,
      "builds": [
        { "src": "backend/app.js", "use": "@vercel/node" }
      ],
      "routes": [
        { "src": "/api/(.*)", "dest": "backend/app.js" }
      ]
    }
    ```
  - Enable automatic deploys from the main branch in Vercel settings.

- **Supabase (Free Tier)**: Provides PostgreSQL database and authentication.
  - **Database Configuration**: Create a new project in Supabase dashboard. Set up tables for users, subscriptions, etc. Use Supabase's SQL editor for schema creation (e.g., users table with id, email; subscriptions table with user_id, service_name, cost, etc.).
  - **Authentication**: Enable email/password auth in Supabase. Integrate with backend using Supabase SDK.
  - **Environment Variables**: Store Supabase URL and anon key in Vercel's environment variables for secure access.
  - Monitor usage to stay within free tier limits (e.g., 500MB database size).

## Development Practices

This project adheres to best software engineering practices, including:
- Modular code structure
- Version control with Git
- Responsive and accessible design
- Secure authentication and data handling
- Error handling and logging
- Testing (unit, integration)
- Continuous integration/deployment via Vercel

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` in both frontend and backend directories.
3. Set up environment variables (e.g., `.env` files). Copy `.env.example` in backend and fill in Supabase details.
4. Run locally: 
   - Frontend: `cd frontend && npm run dev` (runs on http://localhost:3000)
   - Backend: `cd backend && npx ts-node src/index.ts` (runs on http://localhost:3001)
   Note: For local development, you may need to adjust API URLs or use a proxy.
5. Set up Supabase database: Create 'subscriptions' table with columns: id (uuid), user_id (uuid), service_name (text), cost (numeric), billing_cycle (text), start_date (timestamp).
6. Deploy to Vercel and Supabase as configured above.

## About the Developer

Developed by John Jandayan, a passionate developer with expertise in React and Django for web development. I also specialize in Python, C, and SQL. With a keen eye for design and a commitment to writing clean, efficient code, I desire to create and amplify memorable user experiences.

Currently serving as the Caraga State University - Computer Science Society President for Academic Year 2025-2026, I'm focused on building accessible and helpful projects that make learning programming accessible to everyone. [https://portfolio-john-jandayan.vercel.app/](https://portfolio-john-jandayan.vercel.app/)