// db connection logic

const mongoose = require("mongoose");

function connectDB() {
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("DB not connected : ", err);
    });
}

module.exports = connectDB;
