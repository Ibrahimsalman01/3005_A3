const pgp = require('pg-promise')();

// For testing make sure to change the following settings
// to match your localhost or pgAdmin 4 settings
const username = 'postgres';
// Change this to your PgAdmin 4 password
const password = '';
const host = 'localhost';
const port = '5432';
// Change this to your database's name
const database_name = '';

// URI connection to pg database
const db = pgp(`postgres://${username}:${password}@${host}:${port}/${database_name}`);

module.exports = {
  db
};