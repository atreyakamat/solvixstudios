# Solvix Studios

Solvix Studios is a premium, conversion-focused website for a digital agency specializing in high-growth digital systems for clinics, gyms, coaches, and local businesses. The project is built with a modern stack focusing on performance, aesthetics, and user engagement.

## Project Overview

- **Purpose:** A high-converting landing page for Solvix Studios.
- **Main Technologies:**
    - **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
    - **Language:** [TypeScript](https://www.typescriptlang.org/)
    - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
    - **Animations:** [Framer Motion](https://www.framer.com/motion/)
    - **Icons:** [Lucide React](https://lucide.dev/)
    - **UI Components:** Radix UI primitives with custom styling.

## Architecture

The project follows the standard Next.js App Router structure:

- `app/`: Contains the application routes and global styles.
    - `layout.tsx`: Root layout with global metadata and base styles (dark theme).
    - `page.tsx`: The main landing page, assembling various sections.
    - `globals.css`: Global Tailwind CSS imports and custom base styles.
- `components/`:
    - `sections/`: Modular components representing distinct parts of the landing page (e.g., `Hero`, `Services`, `Portfolio`, `Pricing`, `CTA`).
    - `ui/`: Atomic, reusable UI components like `Button`, `Card`, and `Input`.
- `lib/`:
    - `constants.ts`: Centralized location for global configuration, social links, and contact information.
    - `utils.ts`: Helper functions (e.g., `cn` for Tailwind class merging).
- `public/`: Static assets such as images and SVGs.

## Building and Running

### Development
To start the development server:
```bash
npm run dev
```

### Production
To create a production build and start the server:
```bash
npm run build
npm run start
```

### Linting
To run the linter:
```bash
npm run lint
```

## Development Conventions

- **Theme:** The site uses a dark theme with a primary background color of `#050507` and zinc/white text.
- **Styling:** Use Tailwind CSS 4 for all styling. Prefer utility classes over custom CSS where possible.
- **Animations:** Use Framer Motion for scroll-based and entry animations to maintain the "premium" feel.
- **Modularity:** Keep page sections in `components/sections/` and reusable primitives in `components/ui/`.
- **Configuration:** Update global contact info (WhatsApp, Instagram, Email) in `lib/constants.ts`.
- **Icons:** Always use `Lucide React` for consistency.
