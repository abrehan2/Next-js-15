// IMPORTS -
const express = require('express');

express().get("/", (req, res) => {
    res.send({
        time: (new Date()).toUTCString()
    })
}).listen(8080, () => {
    console.log("Server is running on port 8080");
})