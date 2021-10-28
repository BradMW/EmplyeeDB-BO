const connection = require('./connection');

class db {
    constructor(connection) {
        this.connection = connection
    }

    viewDepts() {
        return this.connection.query("SELECT * FROM departments;");
    }
    viewRoles() {
        return this.connection.query("SELECT title, wage, department_id FROM roles JOIN departments ON roles.department_id = departments.id;");
    }
    viewEmployees() {
        return this.connection.query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, manager.last_name AS manager FROM employees LEFT JOIN roles on employees.roles_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;");
    }
    // viewManager() {
    //     return this.connection.query("SELECT manager FROM roles;");
    // }
    addEmployee(data){
        return this.connection.query("INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES(?, ?, ?, ?);", data);
    }
    addRole(data) {
        return this.connection.query("INSERT INTO roles (title, wage, department_id) VALUES(?, ?, ?);", data);
    }
    addDepts(data) {
        return this.connection.query("INSERT INTO departments (department_name) VALUE (?);", data);
    }
    updateRole(data){
        return this.connection.query("UPDATE employees SET roles_id=? WHERE last_name=?;", data)
    }
    
}



module.exports = db;