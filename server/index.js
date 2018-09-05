'use strict'
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const port = process.env.PORT || 5001;
const env = process.env.NODE_ENV;
let app = express();

if(env === 'localhost') {
  app.use(cors());
}
app.use(bodyParser.json());
router(app);

app.use(express.static(path.resolve(__dirname, '../ui/dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ui/dist/', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at port: ${port}`);
});