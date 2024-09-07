const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello Home page");
})

const myServer = http.createServer(app);

myServer.listen(8080, () => console.log("server started"));