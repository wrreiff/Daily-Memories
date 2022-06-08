// const DiaryController = require('../models/models.js');

// const Diary = {};

// Diary.getDiary = (req, res, next) => {
//   const queryStr = 'SELECT * FROM users;';
//   DiaryController.query(queryStr)
//     .then((data) => {
//       res.locals.getDiary = data.rows;
//       return next();
//     })
//     .catch((err) =>
//       next({
//         log: 'get diary',
//         message: { err: err },
//       })
//     );
// };

// Diary.createDiary = (req, res, next) => {
//   const { username, message } = req.body;
//   db.query('INSERT INTO knives VALUES (DEFAULT, $1, $2) RETURNING *', [
//     username,
//     message,
//   ])
//     .then((data) => {
//       res.locals.createDiary = data.rows;
//       return next();
//     })
//     .catch((err) =>
//       next({
//         log: '',
//         message: { err: err },
//       })
//     );
// };

const Diary = require('../models/diary.js');

const DiaryController = {
  createDiary(req, res, next) {
    Diary.create({
      diary: req.body.diary,
    })
      .then((data) => {
        res.locals.newDiary = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- Creating new diary -->❌❌❌ ', err);
      });
  },

  getDiary(req, res, next) {
    Diary.find()
      .then((data) => {
        res.locals.getDiary = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- Get the Diary -->❌❌❌ ', err);
      });
  },

  updateDiary(req, res, next) {
    Diary.findOneAndUpdate(
      {
        diary: req.body.diary,
      },
      {
        diary: req.body.updateDiary,
      }
    )
      .then((data) => {
        res.locals.updateTodo = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- Update the diary -->❌❌❌ ', err);
      });
  },

  deleteDiary(req, res, next) {
    Diary.findOneAndDelete({
      _id: req.params.id,
    })
      .then((data) => {
        res.locals.deleteDiary = data;
        return next();
      })
      .catch((err) => {
        console.log('❌❌❌<-- Delete the diary --> ❌❌❌ ', err);
      });
  },
};

module.exports = DiaryController;
