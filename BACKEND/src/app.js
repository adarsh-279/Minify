// server create

const express = require('express')
const createURLRoute = require('./routes/createURL.route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.use('/api', createURLRoute)

app.listen(process.env.PORT, () => {
    console.log('Server started');
})
