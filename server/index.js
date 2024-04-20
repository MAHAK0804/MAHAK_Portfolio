const express = require('express');
const app= express();
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const cors=require('cors');
var routes= require('./routes/route');

mongoose.connect("mongodb+srv://mahakdeveloper0804:Mahak%40080204@cluster0.lpbdmkv.mongodb.net/Portfolio")
.then(()=>console.log("DB connected"));

app.listen(8000);
app.use(cors({
    origin: "http://localhost:4200/"
  }));
app.use(express.json());
app.use(routes);

