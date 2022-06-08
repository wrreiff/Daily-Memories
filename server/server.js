const PORT = 3000;
const path = require('path');
const express = require('express');
const diaryRouter = require('./routes/diaryRoute');

const app = express();

// parse request body using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/diary', diaryRouter);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
