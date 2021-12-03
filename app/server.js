const express = require('express');
var cors=require('cors');
const app = express()
app.use(cors());
var port = process.env.PORT || 8081
var router=require('./routes')
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/ventas',router);

app.listen(port);