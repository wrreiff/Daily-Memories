const db = require('..models/models.js');
const authController = {};

authController.isLoggedIn = (req, res, next) => {
  //for now we do not verify user by cookie. Frontend should send userid in the request body here.
  // res.locals.user_id = req.body.user_id;
  return next();
};

authController.createSessionId = (req, res, next) => {
  const userId = res.locals.authentication.id;

  let queryString = `
        INSERT INTO diary_session(user_id)
        VALUES($1, 0)  
        ON CONFLICT (user_id) DO NOTHING;  
    `;
  db.query(queryString, [userId])
    .then((data) => console.log(data))
    .then(() => next())
    .catch((err) => {
      return next({
        log: 'Error in the authController create session',
        message: { err: err },
      });
    });
};

module.exports = authController;
