const express = require('express');
const app= express();
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const cors=require('cors');
var routes= require('./routes/route');

mongoose.connect("mongodb://localhost:27017/Portfolio")
.then(()=>console.log("DB connected"));

app.listen(8000);
app.use(cors({
    origin: "http://localhost:4200/"
  }));
app.use(express.json());
app.use(routes);

