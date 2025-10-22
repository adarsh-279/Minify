# 🔗 Minify – URL Shortener 🚀

Minify is a full-stack application that allows users to shorten long URLs, manage them, and track redirections. It’s fast, minimalistic, and designed to make link sharing seamless and organized.

---

# 🧰 Tech Stack

- Frontend: React.js (Vite), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Auth & Security: JWT-based authentication
- Deployment: Vercel

---

# ✨ Features

- 🔗 Shorten URLs — Quickly convert long URLs into short, shareable links
- 📊 Manage URLs — View, delete, and manage all created links
- 👤 User Profiles — Track and manage your links through a profile page
- 🔑 Authentication — Secure signup/login with JWT and cookies
- 🌐 Redirection — Short URLs redirect to original URLs seamlessly
- 📱 Responsive UI — Mobile, Tablet & Desktop friendly interface

---

# 🧠 Problem Solving Journey

- ⚡ Challenge: Handle short URL redirections efficiently.
- ✅ Solution: Created a redirect route (/:id) that fetches the original URL from the database and redirects.


---

# 🔮 Future Scope

- 📈 Analytics — Track clicks per short URL
- 🌍 Custom URLs — Allow users to create branded/custom short URLs
- 🔔 Notifications — Alert users when a link is accessed frequently
- 🛠️ Admin Panel — Manage users and links globally
- 🤖 AI Suggestions — Recommend short link aliases based on content

---

# 🚀 Quick Start

Clone the repo:

```
git clone https://github.com/adarsh-279/Minify.git
```


Backend setup:

```
cd backend
npm install
npx nodemon
```

Frontend setup:

```
cd frontend
npm install
npm run dev
```

Access app:

Backend → http://localhost:8000

Frontend → http://localhost:5173

Note: Make sure to configure .env files for both frontend and backend with API URLs, MongoDB URI, and JWT secret.

---

# 🤝 Contributing

Contributions are welcome! 🎉
Open issues, suggest features, or submit pull requests to make Minify even better.
