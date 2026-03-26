# The Non-Stop Series

A premium worship experience platform designed for the Non-Stop Series community. This application provides a dynamic dashboard, event management, and a seamless user experience for worshipers and administrators alike.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2](https://nextjs.org) (App Router, React 19)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Authentication**: [Better-Auth 1.4](https://better-auth.com/) (Google OAuth integration)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with OKLCH color support
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma 6.19](https://www.prisma.io/)
- **UI Architecture**: 
  - [Shadcn UI 3.8](https://ui.shadcn.com/)
  - [Radix UI primitives](https://www.radix-ui.com/)
  - [Base UI](https://base-ui.com/) (Headless primitives)
- **Animations & Smoothness**: 
  - [Framer Motion 12](https://www.framer.com/motion/)
  - [Lenis 1.3](https://lenis.darkroom.engineering/) for standard smooth scroll
  - [Locomotive Scroll 5](https://locomotivemtl.github.io/locomotive-scroll/) for advanced parallax
- **E-commerce & Payments**: [Resend](https://resend.com/) for emails
- **Media**: [Mux Player](https://www.mux.com/player) for video playback
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner

## 🎨 Design System

The project uses a sophisticated OKLCH-based color palette defined in `app/globals.css`, featuring:
- Primary Violet theme
- Adaptive Light/Dark modes
- Glassmorphism effects and backdrop blurs
- Premium typography using **Bebas Neue** for headings and **Open Sans** for body text

## 📁 Project Structure

- `app/`: Next.js App Router pages and API routes
- `components/`: Reusable UI components and page-specific sections
- `lib/`: Core utilities, auth configuration, and database clients
- `prisma/`: Database schema and MongoDB integration
- `react-email-starter/`: Email templates and development environment
- `public/`: Static assets such as logos and hero videos

## 🔧 Admin Features

- **Video Management**: Dynamic control over hero section videos and live streams using Mux.
- **Event Management**: Create and manage upcoming ministrations with custom poster uploads.
- **User Management**: Unified dashboard using **Better-Auth Admin API** to manage roles, bans, and account lifecycle.
- **Theme Support**: Real-time theme toggling integrated into the admin sidebar and user profile menu.
