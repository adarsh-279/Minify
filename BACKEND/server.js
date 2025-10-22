// server start

require("dotenv").config();
const app = require("./src/app");
const serverless = require('serverless-http')
const connectDB = require("./src/db/db");

connectDB();

module.exports = serverless(app);
