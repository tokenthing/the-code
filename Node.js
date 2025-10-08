const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

let latestData = {};
let lastMoveCommand = null;

app.post('/update', (req, res) => {
  latestData = req.body;
  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json(latestData);
});

app.post('/move', (req, res) => {
  lastMoveCommand = req.body;
  res.sendStatus(200);
});

app.get('/move', (req, res) => {
  res.json(lastMoveCommand || {});
  lastMoveCommand = null; // Clear after sending
});

app.listen(3000, () => console.log('Server running on port 3000'));
