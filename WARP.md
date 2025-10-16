# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot reload (Vite dev server on port 8080)
- `npm run build` - Production build via Vite
- `npm run build:dev` - Development build via Vite (useful for debugging)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

### Package Management
This project uses both npm (package-lock.json) and Bun (bun.lockb). Prefer npm for consistency unless specifically working with Bun features.

## Tech Stack & Architecture

### Core Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query) v5
- **Forms**: React Hook Form with Zod validation
- **Internationalization**: react-i18next with language detection
- **Build Tool**: Vite with SWC for fast compilation

### Project Structure
```
src/
├── components/           # Main application components
│   ├── ui/              # shadcn/ui reusable UI components
│   ├── Hero.tsx         # Landing hero section
│   ├── CrisisSection.tsx # Crisis information display
│   ├── Gallery.tsx      # Image gallery component
│   ├── TakeAction.tsx   # Call-to-action component
│   ├── Resources.tsx    # Resources section
│   └── Footer.tsx       # Site footer
├── pages/               # Route-level page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── lib/                 # Utility libraries
│   └── utils.ts         # Common utilities (cn function for class merging)
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx   # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── assets/              # Static assets (images)
└── main.tsx             # Application entry point
```

### Application Architecture

**Single Page Application (SPA)**: The app is a single-page React application focused on environmental activism for Gabes, Tunisia.

**Component Composition**: The main Index page composes six major sections:
1. Hero - Landing section with call-to-action
2. CrisisSection - Information about environmental crisis
3. Gallery - Visual content display
4. TakeAction - Action items for users
5. Resources - Additional resources
6. Footer - Site footer with links/info

**State Management Pattern**: Uses TanStack Query for server state management, with React's built-in state for local component state.

**Styling Architecture**: 
- Tailwind CSS with custom theme configuration
- shadcn/ui component library for consistent UI elements
- CSS custom properties for theming (HSL color system)
- Responsive design with mobile-first approach

**Path Aliases**: Uses `@/` alias pointing to `src/` directory for clean imports.

## Development Notes

### Component Development
- UI components follow shadcn/ui patterns in `src/components/ui/`
- Main feature components are in `src/components/`
- All components use TypeScript with proper typing
- Components use Tailwind CSS classes via the `cn()` utility function

### Routing
- Single route application with React Router
- Main content on `/` route
- 404 handling with NotFound component
- Add new routes above the catch-all `*` route in App.tsx

### Styling Guidelines
- Use Tailwind utility classes
- Leverage shadcn/ui components for consistency
- Custom colors defined in tailwind.config.ts using CSS custom properties
- Responsive design with Tailwind responsive prefixes

### State Management
- TanStack Query for server state (configured in App.tsx)
- React Hook Form for form state management
- Local component state with useState/useReducer for UI state

### Asset Management
- Static images in `src/assets/`
- Import images directly in components
- Vite handles asset optimization and bundling

### Internationalization (i18n)
- Uses react-i18next for internationalization
- Supports English (en), French (fr), and Arabic (ar)
- Translation files located in `src/locales/[language]/common.json`
- Language switcher component in `src/components/LanguageSwitcher.tsx`
- RTL support for Arabic with automatic direction switching
- Language detection and localStorage persistence
- Use `useTranslation()` hook and `t('key')` function for translations

