// server create

const express = require('express')
const cookieParser = require("cookie-parser");
const urlRoute = require('./routes/url.route')
const redirectURLRoute = require('./routes/redirectURL.route')
const authRoute = require('./routes/auth.route')
const userProfileRoute = require('./routes/userProfile.route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.use('/api', urlRoute)
app.use('/auth', authRoute)
app.use('/profile', userProfileRoute)
app.use("/", redirectURLRoute);

app.listen(process.env.PORT, () => {
    console.log('Server started');
})
