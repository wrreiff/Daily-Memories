// const express = require('express');
// const diaryController = require('../controllers/diaryController');
// const diaryRouter = express.Router();

// diaryRouter.get('/getDiary', diaryController.getDiary, (req, res) => {
//   return res.status(200).json(res.locals.getDiary);
// });

// diaryRouter.post('/postDiary', diaryController.createDiary, (req, res) => {
//   return res.status(200).json(res.locals.createDiary);
// });

// diaryRouter.delete('/:id', diaryController.deleteDiary, (req, res) => {
//   return res.status(200).json(res.locals.deleteDiary);
// });

// diaryRouter.put('/:id', diaryController.updateDiary, (req, res) => {
//   return res.status(200).json(res.locals.updateDiary);
// });

// module.exports = diaryRouter;

const express = require('express');
const diaryController = require('../controllers/diaryController');
const diaryRouter = express.Router();
const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://iamNurbek:Jouraboev30@soloproject.cvh7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

diaryRouter.post('/', diaryController.createDiary, (req, res) => {
  res.status(200).json(res.locals.diary);
});

diaryRouter.get('/get', diaryController.getDiary, (req, res) => {
  res.status(200).json(res.locals.getDiary);
});

diaryRouter.patch('/update', diaryController.updateDiary, (req, res) => {
  res.status(200).json(res.locals.updateDiary);
});

diaryRouter.delete('/delete/:id', diaryController.deleteDiary, (req, res) => {
  res.status(200).json(res.locals.deleteDiary);
});

module.exports = diaryRouter;
