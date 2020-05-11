'use strict';

const express = require('express');
const oracledb = require('oracledb');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log('GET /');
  console.log('connectString: ', req.query.connectString);
  console.log('user: ', req.query.user);
  console.log('password: ', req.query.password);
  oracledb.getConnection({
    user : req.query.user,
    password : req.query.password,
    connectString : req.query.connectString,
  }).then(function (connection) {
    console.log('Successfully connected');
    connection.close();
  }).catch(function (err) {
    console.log('Error in getConnection', err);
  });
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
