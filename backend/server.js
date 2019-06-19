'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend')));

// app.use('/', (req, res) => {
//   res.render('index', { title: 'welcome'});
// });
app.listen(3001, () => {
  console.log('Server is up on port 3001');
});
