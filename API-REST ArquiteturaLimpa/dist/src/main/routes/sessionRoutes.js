"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Imports
const router = (0, express_1.Router)();
router.get('/session/oi', (req, res) => {
    res.send('ola');
});
exports.default = router;
