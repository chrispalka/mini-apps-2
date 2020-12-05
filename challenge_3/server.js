/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('**', (req, res) => {

});

app.listen((PORT), () => {
  console.log(`Listening on port ${PORT}`);
});
