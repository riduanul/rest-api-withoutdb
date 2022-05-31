const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const usersRouter = require('./Routes/usersRoute');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//routers
app.use("/users",usersRouter)

//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Views/index.html")
})
 
// route not found error
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found",
    })
})
// server error
app.use(( req, res, next) => {
    res.status(500).json({
        message: "something is wrong with server ",
    })
})



module.exports = app;