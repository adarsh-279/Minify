require("dotenv").config();
const serverless = require("serverless-http");
const connectDB = require("./src/db/db");
const app = require("./src/app");

const handler = async (req, res) => {
    try {
        await connectDB(); // cached connection
    const server = serverless(app);
        return server(req, res);
    } catch (err) {
        console.error("❌ DB connection failed:", err);
        return res.status(500).send("Database connection failed");
    }
};

// Local development server
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, async () => {
        await connectDB();
        console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
}

module.exports = handler;
