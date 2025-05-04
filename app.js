const express = require("express")
const bookRoute = require("./routes/bookRoute")


const app = express()
require("./database/connection")
app.use(express.json())

app.use("/api/books",bookRoute)

app.listen(3000,function(){
    console.log("server/backend/node project has started at port 3000")
})