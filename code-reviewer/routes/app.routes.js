const express = require('express');
const appRouter = express.Router();
const {getResponse} = require('../controller/app.controller');

appRouter.post("/review", getResponse);
module.exports = appRouter;