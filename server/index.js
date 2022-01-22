const express = require("express");
const app = express();
const port = 8080;
const { myDatabase } = require("./database");
const cors = require("cors");
const seedDatabase = require("./database/dummyData");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./api/index"));

//myDatabase.sync().then(() => {
console.log("Database synced!");
const syncDatabase = () => {
  myDatabase
    .sync({ alter: true })
    .then(() => {
      seedDatabase;
    })
    .catch((err) => console.log(err));
};
syncDatabase();
//});

app.listen(port, () => console.log(`Serving on port ${port}`));
