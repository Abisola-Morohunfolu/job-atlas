# Job Tracker

A modern job application tracking system built with React, TypeScript, and Supabase.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Query** - Data fetching and state management
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Supabase** - Backend as a service (Auth, Database, Storage)

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── ui/        # shadcn/ui components
├── config/        # Configuration files (Supabase, etc.)
├── features/      # Feature-based modules
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and setup
├── pages/         # Page components
└── types/         # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add new shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```
