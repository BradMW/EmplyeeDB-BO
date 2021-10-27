const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Root1234',
      database: 'empire_db'
    },
    console.log(`Connected to the empire_db database.`)
  );
  
  connection.query = util.promisify(connection.query);


module.exports = connection;