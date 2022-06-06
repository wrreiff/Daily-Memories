const PORT = 3000;
const path = require('path');
const express = require('express');

const app = express();

// parse request body using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
