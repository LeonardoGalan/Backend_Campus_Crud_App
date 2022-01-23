const express = require("express")
const app = express()
const port = process.env.PORT || 8080
const {myDatabase,createDummyData} = require("./database")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./api/index'))

if (port == null || port == "") {
  port = 8080;
}

myDatabase.sync().then(() => {createDummyData()})
.then(()=>{
    console.log("Database synced!")
    app.listen(port, () => console.log(`Serving on port ${port}`))
})

