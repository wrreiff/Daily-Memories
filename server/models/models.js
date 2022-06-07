const { Pool } = require('pg');
const Connection = require('tedious').Connection;

const PG_URI =
  'postgres://ktbcevob:8iAM1i-MqdpbTelOYxH3HZQEYxzk5Fd4@queenie.db.elephantsql.com/ktbcevob';

const pool = new Pool({
  connectionString: PG_URI,
});

const connection = new Connection(config);
connection.on('connect', function (err) {
  console.log('Connected');
});

connection.connect();
