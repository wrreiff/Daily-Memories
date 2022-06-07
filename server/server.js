const PORT = 3000;
const path = require('path');
const express = require('express');

const app = express();

// parse request body using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// catch-all router handler for any request to an unknown route
app.use('*', (req, res) => {
  return res.status(404).send('ERROR, ROUTE NOT FOUND');
});

// global error handling
app.use((err, req, res, next) => {
  const globalErr = {
    log: 'UNKNOWN MIDDLEWARE ERROR',
    status: 500,
    message: { err: 'ERROR' },
  };
  const errorObj = Object.assign({}, globalErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
