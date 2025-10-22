require("dotenv").config();
const serverless = require("serverless-http");
const connectDB = require("./src/db/db");
const app = require("./src/app");

// Connect DB once when module loads
connectDB().catch((err) =>
    console.error("❌ Initial DB connection failed:", err)
);

// Create serverless handler once
const handler = serverless(app);

// Local development
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
}

module.exports = handler;
