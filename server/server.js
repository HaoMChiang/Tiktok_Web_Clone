import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Data from "./data.js";
import Videos from "./dbData.js";
import "dotenv/config";

/* App Config */
const app = express();
const port = process.env.PORT || 9000;

/* Middlewares */
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

/* DB Config */
const dbConnection = process.env.DB_CONNECTION;
mongoose.connect(dbConnection, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

/* API Endpoints */
app.get("/", (req, res) => {
  res.status(200).send("Hello ! I am the server.");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

/* listen */
app.listen(port, () => console.log(`Listening on port: ${port}`));
