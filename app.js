
/**
 * Express.js web app
 * 
 * @module
 */

// import Express
const express = require("express");
const app = express();

app.get("/", async(req, res, next) => {
    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.send("Hello World");
    } catch(ex) {
        return next(ex);
    }
})

module.exports = app;