const {version} = require('./package.json')

const express = require('express');
const app = express();
app.get('/endpoint',(request,response)=>{
    console.log(version);
    response.json({version});
})
module.exports = app;