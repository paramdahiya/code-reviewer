// create server
const app = require('./src/app');
require('dotenv').config();

app.listen(process.env.SERVER_PORT || 3000, ()=>(
    console.log("Server running at port", process.env.SERVER_PORT || 3000)
));