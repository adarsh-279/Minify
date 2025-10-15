// server create

const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.listen(process.env.PORT, () => {
    console.log('Server started');
})
