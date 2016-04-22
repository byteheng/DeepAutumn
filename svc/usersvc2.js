var express = require('express');
var router = express.Router();
var runtime = require('../runtime');
var sqlexecutor = require('../sqlexecutor');

function SetRouter(router) {
    router.get('/usvc2', function (req, res) {
        res.contentType('application/json');
        res.send('{"error":1}');
    });
}

module.exports.SetRouter = SetRouter;