import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./crud-shop-api";
import path from "path";
import indexController from "./index";
import jobsController from "./jobs";
import hobbiesController from "./hobbies";
import formController from "./form";
import saveFormController from "./formSave";

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/shop-api-db', apiRoutes);

server.get("/", indexController);
server.get("/jobs", jobsController);
server.get("/hobbies", hobbiesController);
server.get("/form", formController);
server.post("/save", saveFormController);

server.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

server.listen(8100);
