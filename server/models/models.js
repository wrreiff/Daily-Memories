const { Pool } = require('pg');
const PG_URI = '*** PLACE SQL URI HERE ***';

const pool = new Pool({
  connectionString: PG_URI,
});
