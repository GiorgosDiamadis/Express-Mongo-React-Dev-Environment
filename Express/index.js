const express = require('express')
const app = express()
const port = 5000
const db = require("mongoose")

app.use(express.urlencoded());
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.connect("mongodb://root:root@db:27017/snippetsDb?authSource=admin").then((res) => {
    console.log("Database connected")
    app.listen(port, async () => {
        console.log(`Listening on ${port}`)
    })
}).then((reason) => {
    console.log(reason)
})