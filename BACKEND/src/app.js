// server create

const express = require('express')
const cookieParser = require("cookie-parser");
const cors = require('cors')
const urlRoute = require('./routes/url.route')
const redirectURLRoute = require('./routes/redirectURL.route')
const authRoute = require('./routes/auth.route')
const userProfileRoute = require('./routes/userProfile.route')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
);

// Routes
app.get("/", (req, res) => res.send("Default Route"));
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use("/api", urlRoute);
app.use("/auth", authRoute);
app.use("/profile", userProfileRoute);
app.use("/", redirectURLRoute);

module.exports = app;
