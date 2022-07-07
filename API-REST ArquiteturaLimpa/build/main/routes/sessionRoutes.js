"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//Imports
var router = (0, express_1.Router)();
router.get('/session/oi', function (req, res) {
    res.send('ola');
});
exports.default = router;
