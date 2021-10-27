const connection = require('./connection');

class db {
    constructor(connection) {
        this.connection = connection
    }

    viewDepts() {
        return this.connection.query("SELECT * FROM departments;");
    }
    viewRoles() {
        return this.connection.query("SELECT * FROM roles JOIN departments ON roles.department_id = departments.id;");
    }
    viewEmployees() {
        return this.connection.query("SELECT * FROM employees INNER JOIN roles on employees.roles_id = roles.id INNER JOIN departments on roles.department_id = departments.id;");
    }
    // viewManager() {
    //     return this.connection.query("SELECT manager FROM roles;");
    // }
    addEmployee(data){
        return this.connection.query("INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES(?, ?, ?, ?);", data);
    }
    addRole(data) {
        return this.connection.query("INSERT INTO roles (department_id, title, wage) VALUES(?, ?, ?);", data);
    }
    addDepts(data) {
        return this.connection.query("INSERT INTO departments")
    }
    updateEmployee(data){
        return this.connection.query()
    }
    
}



module.exports = db;