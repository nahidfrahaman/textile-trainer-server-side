const express = require('express')
//call express by app
const app= express();
const cors = require('cors');
const { listen } = require('express/lib/application');
//app tme akhon cors re use koro
app.use(cors());

const Port = process.env.port || 5000;

app.get("/",(req, res)=>{
    res.send('hurrah server is on')
})

app.listen(Port, ()=>{
    console.log('server kaj kortece', Port)
})