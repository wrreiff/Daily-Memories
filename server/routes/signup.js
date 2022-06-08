const express = require('express');
const diaryController = require('../controllers/diaryController');
const signupController = express.Router();
const mongoose = require('mongoose');

// Registering user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ password: hashedPassword, username });
  user.save().then((userInfo) => {
    jwt.sign(
      { id: userInfo._id, username: userInfo.username },
      secret,
      (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res
            .cookie('token', token)
            .json({ id: userInfo._id, username: userInfo.username });
        }
      }
    );
  });
});
