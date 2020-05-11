const express = require('express');
const oracledb = require('oracledb');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
