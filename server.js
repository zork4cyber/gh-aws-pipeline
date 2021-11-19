'use strict';

const express = require('express');
const app = express();

// serves static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send("Ziptopia");
});

app.listen(process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}`));