const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))

const port = 8080
app.listen(port, function(){
    console.log("up and running")
})

