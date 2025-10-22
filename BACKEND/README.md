# Minify — Backend Documentation

Minimal Node.js + Express backend for **Minify** (URL shortener). This README provides a quick overview, how to run the server, and where to look in the codebase.

---

## Quick start

1. Install dependencies
    ```
    npm install
    ```

2. Start development server (nodemon)
    ```
    npm run dev
    ```
   or start production server
   ```
   npm start
   ```

3. Check logs in the terminal. Server entry: server.js

Note: Review package.json for exact scripts.

---

## Project structure

- server.js — app entry / server bootstrap
- package.json
- src/
  - app.js — Express app setup, middleware, routes
  - db/
    - db.js — MongoDB connection
  - routes/
    - auth.routes.js — authentication endpoints
    - url.route.js — URL creation, deletion endpoints
    - redirectURL.route.js — handle short URL redirects
    - userProfile.route.js — user profile endpoints
  - controllers/
    - auth.controller.js — auth logic (register/login)
    - url.controller.js — create/delete short URLs
    - user.controller.js — user profile logic
  - models/
    - shortURL.model.js
    - user.model.js
  - middleware/
    - auth.middleware.js — JWT auth / protected routes

```

Directory structure:
└── BACKEND/
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── server.js
    ├── src/
    │   ├── app.js
    │   ├── controllers/
    │   │   ├── auth.controller.js
    │   │   ├── url.controller.js
    │   │   └── user.controller.js
    │   ├── db/
    │   │   └── db.js
    │   ├── middlewares/
    │   │   └── auth.middleware.js
    │   ├── models/
    │   │   ├── shortURL.model.js
    │   │   └── user.model.js
    │   └── routes/
    │       ├── auth.route.js
    │       ├── redirectURL.route.js
    │       ├── url.route.js
    │       └── userProfile.route.js
    └── vercel.json

```

---

## Routes overview

- Auth routes (/auth)
  - user registration and login endpoints
  - token issuance and basic validation

- URL routes (/api)
  - Create short URL (POST /api/create)
  - Delete URL (DELETE /api/delete)

- Redirect route (/)
  - Redirect from short URL to original URL

- Profile routes (/profile)
  - User profile CRUD operations

Exact paths and HTTP methods are defined in the route files — open them to confirm.

---

## Key files to inspect first

- src/app.js — middleware, CORS, route mounting
- server.js — server start and error handling
- src/db/db.js — MongoDB connection flow
- src/routes/ — request handling 
- src/controllers/ — business logic
- src/middleware/auth.middleware.js — protected route verification

---

## Notes for contributors

- Keep secrets out of the repo (.env only).  
- Database and storage configuration lives in src/db/db.js.
- Use environment variables for backend URLs and JWT secrets. 
- Add tests and linting scripts in package.json if needed.  
- For API contract changes, update controllers and route files together.

Open these files to understand flow:
- server.js
- src/app.js
- src/db/db.js
- src/routes/auth.routes.js
- src/routes/url.routes.js
- src/routes/redirectURL.route.js
- src/routes/userProfile.route.js
- src/controllers/auth.controller.js
- src/controllers/url.controller.js
- src/controllers/user.controller.js
