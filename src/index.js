const express = require('express');
const { PORT } = require('./config/server.config');

const app = express();


app.get('/', (req, res) => {
    res.send({ mes: "Server started" });
})

app.listen(PORT || 3000, () => {
    console.log(`listening to port number ${PORT || 3000}`)
})