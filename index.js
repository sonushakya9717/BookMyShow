require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const path =  require("path")

// coneect your DB KRNA
connectDB();

app.use(cors());

app.use(express.json());

const user = require("./routes/users");

const admin = require("./routes/admin");

const auth = require("./routes/auth");

app.use("/api/users", user);
app.use("/api/admins", admin);
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build ", "index.html "));
  });
}

app.use((err, req, res, next) => {
  // console.log(err);
  return res.status(err.status).json({ msg: err.errors });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
