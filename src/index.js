const express = require('express');
const { PORT } = require('./config/server.config');
const bodyparser = require('body-parser');
const connectToDB = require('./config/db.config');
const router = require('./routes/User.routes');
const adminRouter = require('./routes/Admin.routes');

const app = express();
app.use(bodyparser.json());

app.use('/user', router) //user router api -> /signup, /login
app.use('/admin', adminRouter)
app.listen(PORT, async () => {
    console.log(`listening to port number ${PORT}`)
    await connectToDB();
    console.log("Connection Sucessfully with DB");
})