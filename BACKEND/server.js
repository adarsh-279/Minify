require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

// Connect to MongoDB, then start server
connectDB()
    .then(() => {
        console.log("✅ MongoDB connected successfully");

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1); // Exit with failure
    });
