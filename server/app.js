require("dotenv").config();
const db = require("./config/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

// import route setup files
const userRouter = require("./routes/user");
const { urlencoded } = require("express");

// use middlewares
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));

//conecting to database
db.connect((err) => {
  if (err) {
    console.log("Database Connection Error:" + err);
  } else {
    console.log("Database Connected Successfully");
  }
});

// use base routes
app.use("/", userRouter);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => console.log("Server connected"));
