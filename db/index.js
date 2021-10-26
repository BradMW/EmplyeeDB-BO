const connection = require('./connection');

class db {
    constructor(connection) {
        this.connection = connection
    }

    viewDepts() {
        return this.connection.query("SELECT * FROM departments;");
    }
    viewRoles() {
        return this.connection.query("SELECT * FROM roles;");
    }
    viewEmployees() {
        return this.connection.query("SELECT * FROM employees;");
    }
    viewManager() {
        return this.connection.query("SELECT manager FROM roles")
    }
    addEmployee(argument){
        
    }
}



module.exports = db;