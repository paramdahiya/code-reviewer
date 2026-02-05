const express = require('express');
const appRouter = express.Router();
const {getResponse} = require('../controller/app.controller');

appRouter.post("/review", getResponse);
appRouter.get('/', (req, res)=>(res.send("backend is running")));

module.exports = appRouter;