const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const PORT = 3000;

const app = express();


app.use(cors());

app.use(express.static(path.join(__dirname, './public')));

app.get('/currentprice/:date', (req, res) => {
  const { date } = req.params
  const coinDesk = `https://api.coindesk.com/v1/bpi/historical/close.json?${date}`;
  axios(coinDesk)
  .then((response) => {
    const { data } = response;
    res.status(200);
    res.json(data)
  })
  .catch((e) => {
    console.log('Error: ', e);
    res.sendStatus(404);
  })
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Connected to server at: http://localhost:${PORT}`)
});
