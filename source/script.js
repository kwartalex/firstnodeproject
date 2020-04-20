import express from "express";
import path from "path";
import indexController from "./index";
import jobsController from "./jobs";
import hobbiesController from "./hobbies";

const server = express();

server.get("/", indexController);
server.get("/jobs", jobsController);
server.get("/hobbies", hobbiesController);

server.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

server.listen(8100);
