
/**
 * Node.js web server
 * 
 * @module
 */

"use strict";

// import Node modules
const http = require("http");

// define port
const cfg = require("./config.json");

// create server
const express = require("express");
const app = require("./app");
const server = http.createServer(app);

server.listen(cfg.http, () => {
    console.log(`Server is listerning on port ${cfg.http}`);
}) 
