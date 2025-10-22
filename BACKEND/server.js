require("dotenv").config();
const serverless = require("serverless-http");
const connectDB = require("./src/db/db");
const app = require("./src/app");

let isDBConnected = false;

const handler = async (req, res) => {
    try {
        if (!isDBConnected) {
            await connectDB();
            isDBConnected = true;
        }

        const server = serverless(app);
        return server(req, res);
    } catch (err) {
        console.error("❌ DB connection failed:", err);
        return res.status(500).send("Database connection failed");
    }
};

if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, async () => {
        await connectDB();
        console.log(`🚀 Server running locally on http://localhost:${PORT}`);
    });
}

module.exports = handler;
