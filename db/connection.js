const mysql = require('mysql2');
const db = require('.');

addEmployee(firstName, LastName, roleOption, managerOption);{
    db.query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id), SELECT ${firstName}, ${lastName}`)
console.log('New Employee Added!');
}

module.exports = Connection;