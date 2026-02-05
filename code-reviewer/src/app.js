const express = require('express');
const app = express();
const main = require('../services/ai.service');
const appRouter = require('../routes/app.routes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>(res.send("backend is running")));


app.use('/api', appRouter);

module.exports = app;