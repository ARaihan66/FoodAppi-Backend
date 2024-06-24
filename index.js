const dotEnv = require('dotenv');
dotEnv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 7000;




app.listen(port, ()=>{
    console.log(`Port is running on the port no ${port}`)
})
