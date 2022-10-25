const express = require('express')
//call express by app
const app= express();
const cors = require('cors');
const { listen } = require('express/lib/application');
//app tme akhon cors re use koro
app.use(cors());

const Port = process.env.port || 5000;

const Cources = require("./data/product.json")

app.get("/",(req, res)=>{
    res.send('hurrah server is on')
})

app.get("/cources",(req,res)=>{
    res.send(Cources)
})

app.listen(Port, ()=>{
    console.log('server kaj kortece', Port)
})