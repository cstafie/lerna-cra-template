import express from "express";
import { Message } from "@forte/shared";

const app = express();
const port = 8080;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Forte says hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});