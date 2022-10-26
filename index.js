const express = require('express')
//call express by app
const app= express();
const cors = require('cors');
const { listen } = require('express/lib/application');
//app tme akhon cors re use koro
app.use(cors());

const Port = process.env.port || 5000;

const courses = require('./data/cources.json')

const CoursesDetails = require("./data/product.json")

app.get("/",(req, res)=>{
    res.send('hurrah server is on')
})

app.get("/courses",(req,res)=>{
    res.send(CoursesDetails)
})



app.listen(Port, ()=>{
    console.log('server is on',)
})