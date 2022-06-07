const db = require('..models/models.js');
const customerController = {};

customerController.createCustomer = (req, res, next) => {
  const { user, password } = req.body;

  db.query('INSERT INTO customer VALUES (DEFAULT, $1, $2) RETURNING *', [
    user,
    password,
  ])
    .then((data) => {
      res.locals.addedCustomer = data.rows[0];
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error has occured in the Customer Controller when creating a new customer',
        message: { err: err },
      })
    );
};

customerController.deleteCustomer = (req, res, next) => {
  const { id } = req.params;
  db.query('DELETE FROM customer WHERE id = $1 RETURNING *', [id])
    .then((data) => {
      res.locals.deletedCustomer = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error has occured in the Customer Controller when deleting customer',
        message: { err: err },
      })
    );
};

customerController.getCustomer = (req, res, next) => {
  const queryStr = 'SELECT * FROM customer WHERE username = $1';
  const { username } = req.params;
  db.query(queryStr, [username])
    .then((data) => {
      res.locals.customer = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error has occured in the Customer Controller when getting customer',
        message: { err: err },
      })
    );
};

customerController.login = (req, res, next) => {
  const queryStr = 'SELECT * FROM customer WHERE username = $1';
  const { user, password } = req.body;
  db.query(queryStr, [user])
    .then((data) => {
      if (password !== data.rows[0].password) {
        res.locals.authentication = {
          username: null,
          message: 'Your password is invalid',
        };
        return next();
      }
      res.locals.authentication = {
        id: data.rows[0].id,
        username: data.rows[0].username,
        message: 'You are logged in',
      };
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error has occured in the Customer Controller when logging in customer',
        message: { err: err },
      })
    );
};

module.exports = customerController;
