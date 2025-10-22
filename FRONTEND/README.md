# Minify — Frontend Documentation

A minimal React + Vite frontend for the **Minify** app (URL shortener). This README provides a quick overview to get started and understand the project layout.

---

## Quick start

1. Install dependencies
   ```
   npm install
   ```

3. Run development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   npm run preview
   ```

---

## Project structure (important files)

- index.html — HTML entry
- vite.config.js — Vite configuration
- src/
  - main.jsx — app bootstrap
  - App.jsx — top-level component
  - index.css — global styles
  - assets/ — images and static assets
  - components/
    - UrlShortForm.jsx — main URL input and shortener form
  - pages/
    - Home.jsx — main page with URL shortener
    - Login.jsx — user login page
    - Signup.jsx — user registration page
    - Profile.jsx — user profile page
  - routes/
    - AppRoutes.jsx — client-side routes
  - public/
    - static public assets (logo, etc.)

```

Directory structure:
└── FRONTEND/
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── home.png
    │   ├── login.png
    │   ├── logo.png
    │   ├── logo2.png
    │   ├── vite.svg
    │   └── wave.png
    ├── README.md
    ├── src/
    │   ├── App.jsx
    │   ├── assets/
    │   │   └── react.svg
    │   ├── components/
    │   │   └── UrlShortForm.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Profile.jsx
    │   │   └── Signup.jsx
    │   └── routing/
    │       └── AppRoute.jsx
    ├── vercel.json
    └── vite.config.js

```

---

## Routing overview

Common routes implemented in AppRoutes.jsx:
- / → Home
- /login → User Login
- /register → User Register
- /profile → User Profile

---

## Notes for contributors

- API calls and endpoints are referenced in the source files (components/pages). Adjust endpoints directly in the files where requests are made.
- Keep assets in src/assets or public for bundling and predictable paths.
- Keep code modular: UI components in /components, pages in /pages, and routing in /routes.

Open these files to quickly understand app flow:
- src/main.jsx
- src/App.jsx
- src/routing/AppRoutes.jsx
- src/pages/Home.jsx
