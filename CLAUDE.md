# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint code analysis
```

## Architecture Overview

**Next.js 14 App Router SaaS Application**

This is a modern Next.js application using the App Router architecture (not legacy pages directory). Key architectural patterns:

- **App Router Structure**: Uses `app/` directory with file-based routing
- **Server Components**: Default rendering strategy for optimal performance
- **Layout System**: Nested layouts with `app/layout.js` as root layout
- **Styling**: Tailwind CSS + DaisyUI component library integration

## Key Configuration

**Path Aliases** (`jsconfig.json`):
- `@/*` → root directory (e.g., `@/app/components/Button`)

**Tailwind Configuration** (`tailwind.config.js`):
- Content paths: `./pages/**/*.{js,ts,jsx,tsx,mdx}`, `./components/**/*.{js,ts,jsx,tsx,mdx}`, `./app/**/*.{js,ts,jsx,tsx,mdx}`
- DaisyUI plugin integrated for pre-built components
- Custom gradient utilities (radial, conic) available

**DaisyUI Integration**:
- Component library provides semantic CSS classes (btn, card, modal, etc.)
- Theme system available via `data-theme` attribute
- Documentation: https://daisyui.com/

## File Structure Patterns

```
app/
├── layout.js          # Root layout (metadata, fonts, global structure)
├── page.js            # Homepage route
├── globals.css        # Global styles with Tailwind directives
└── [feature]/         # Feature-based route organization
    ├── page.js        # Feature page
    └── layout.js      # Feature layout (optional)
```

## Development Notes

- **Styling Approach**: Use DaisyUI semantic classes first, then Tailwind utilities for customization
- **Import Strategy**: Leverage `@/` alias for cleaner import paths
- **Component Pattern**: Create reusable components in logical directories under `app/`
- **Current State**: Early development stage with basic homepage and DaisyUI integration