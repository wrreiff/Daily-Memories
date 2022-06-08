// const { Pool } = require('pg');
// const PG_URI =
//   'postgres://ktbcevob:8iAM1i-MqdpbTelOYxH3HZQEYxzk5Fd4@queenie.db.elephantsql.com/ktbcevob';

// const pool = new Pool({
//   connectionString: PG_URI,
// });

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
// };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarySchema = new Schema({
  diary: { type: String, require: true },
  time: { type: String, require: true },
  user: { type: String },
});

module.exports = mongoose.model('diary', diarySchema);
