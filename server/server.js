import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Data from "./data.js";

/* App Config */
const app = express();
const port = process.env.PORT || 9000;
const dbConnection =
  "mongodb+srv://admin:6p7Z9pAaOcIFjyiJ@cluster0.zwx9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/* Middlewares */
app.use(express.json());
app.use(cors());

/* DB Config */

/* API Endpoints */
app.get("/", (req, res) => {
  res.status(200).send("Hello ! I am the server.");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(Data);
});

/* listen */
app.listen(port, () => console.log(`Listening on port: ${port}`));
