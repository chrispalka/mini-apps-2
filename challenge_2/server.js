const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {

});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Connected to server at: http://localhost:${PORT}`)
});
