// server create

const express = require('express')
const urlRoute = require('./routes/url.route')
const redirectURLRoute = require('./routes/redirectURL.route')
const authRoute = require('./routes/auth.route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.use('/api', urlRoute)
app.use('/', redirectURLRoute)
app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log('Server started');
})
