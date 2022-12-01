const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

const mongoose = require("mongoose")

app.use('/', route);
// mongodb://localhost:27017/test1
// mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/Assingment
mongoose.connect("mongodb+srv://rubygupta7505:GDDYMfHDEGehjUj0@cluster0.xf64f.mongodb.net/FirstProject")
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))


app.listen(4000, function(){
    console.log('Express is running on port 4000');
})