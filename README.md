# Task Management App

A Next.js application that consumes a GraphQL API to display and manage tasks with user authentication.

## Features

- **Public Task List**: Browse all available tasks
- **User Authentication**: Login with email/password
- **Admin Dashboard**: View personal tasks after authentication
- **Client-Side Sorting**: Sort tasks by status (A-Z, Z-A)
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **GraphQL**: Apollo Client
- **Authentication**: HTTP-only cookies

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone git@github.com:barbara-shk/pixel-test.git
cd pixel-task-app
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Add your GraphQL endpoint to `.env.local`:
```
NEXT_PUBLIC_GRAPHQL_URL=https://asktask-api.stagelab.co.uk/graphql
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Browse Tasks**: Visit the homepage to view all public tasks
2. **Login**: Click "Login" and enter your credentials
3. **View Your Tasks**: After login, access the admin dashboard to see your personal tasks
4. **Sort Tasks**: Use the dropdown to sort tasks by status

## API Integration

The application connects to a GraphQL API with these main operations:

- `taskList`: Fetches all public tasks
- `login`: Authenticates users
- `getUserTasks`: Fetches user-specific tasks (requires authentication)

## Architecture

- **Server-Side Rendering**: All data fetching occurs server-side per requirements
- **Authentication**: Secure HTTP-only cookies for session management
- **Type Safety**: Generated GraphQL types for full type safety

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Utilities and GraphQL setup
└── styles/             # Global styles
```

## Development Notes

- All data fetching is server-side only (no client-side API calls)
- Authentication uses HTTP-only cookies for security
- Error handling implemented for network and GraphQL errors
- Responsive design with mobile-first approach