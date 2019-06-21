'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './frontend')));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
