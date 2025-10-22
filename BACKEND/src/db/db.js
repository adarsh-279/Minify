// db connection logic

const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(process.env.MONGODB_URI) // no deprecated options
            .then((db) => {
            console.log("✅ MongoDB connected successfully");
            return db;
        })
        .catch((err) => {
            console.error("❌ MongoDB connection failed:", err);
            throw err;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

module.exports = connectDB;
