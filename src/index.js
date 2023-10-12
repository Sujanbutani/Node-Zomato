const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/db.connection");
const router = require("./routes/v1")
require("./helpers/crons");
const config = require("./config/config");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended : false}));

app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname, `./public`)));

app.use("/v1", router);

/** Get image */
app.use(express.static(`./public`));

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("Server listning port number 8080!");
})