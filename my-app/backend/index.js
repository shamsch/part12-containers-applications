const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/ping", (req, res) => {
    res.send("pong")
})

app.listen(3000, () => {
    console.log("Server started on port", process.env.PORT||3000)
})