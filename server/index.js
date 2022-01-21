const express = require("express")
const app = express()
const port = 3002
const {myDatabase} = require("./database")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api",require("./api"))

myDatabase.sync().then(() => {
    console.log("Database synced!")

    app.listen(port, () => console.log(`Serving on port ${port}`))
    
})
