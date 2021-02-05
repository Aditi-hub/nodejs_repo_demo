// const countryStatesApi= require('./countrystatesjson');

// console.log(jsonData.on('/countrystates.json'));
const express = require('express');
const countryStatesApi= require('./countrystatesjson');

const app = express();
app.use(express.json());
countryStatesApi(app);
app.listen(3003,()=>console.log('Server Started'));