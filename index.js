const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");
// const { readdirSync } = require("fs");
const taskRouter = require("./routes/taskRouter");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.port);

const port = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//   res.send("app is working");
// });

// const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb+srv://tonu:tonu99@cluster0.cgv1j.mongodb.net/toDo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(`db connection err`, err));

//middleware

app.use(cors());

//routes middleware
// app.use("/api", authRoutes);
// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.use("/api", taskRouter);

//router routes
// app.get("/api", (req, res) => {
//   res.json({
//     data: "what..........??",
//   });
// });

app.listen(process.env.PORT, () => console.log(`server is running on all`));
