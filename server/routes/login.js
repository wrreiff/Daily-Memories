const express = require('express');
const app = express.Router();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then((userInfo) => {
    if (!userInfo) {
      return res.sendStatus(401);
    }
    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      jwt.sign({ id: userInfo._id, username }, secret, (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res
            .cookie('token', token)
            .json({ id: userInfo._id, username: userInfo.username });
        }
      });
    } else {
      res.sendStatus(401);
    }
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').send();
});
