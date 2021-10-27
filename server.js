const express = require('express');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const connection = require('./db/connection');
const db = require('./db/index')
// Import and require mysql2
const mysql = require('mysql2');
// Connect to database
const server = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Root1234',
    database: 'empire_db'
  },
  console.log(`Connected to the empire_db database.`)
);

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: 'What would you like to do?',
                choices: [
                    "View Departments",
                    "View Roles",
                    "Add an Employee",
                    "Remove Employee"
                ]
            }
        ])
        .then((selection) => {
            let order = selection.menuOption;
            switch(order){
                case "View Departments":
                    viewDepts()
                    break;
                case "View Roles":
                    viewRoles()
                    break;
                case "Add an Employee":
                    addEmployee()
                    break;
                case "Remove Employee":
                    removeEmployee()
                    break;
                    default:
                        console.log("all Done!");
            }
        })
}

const viewDepts = () => {
    const emp = new db(connection);
    console.table(emp.viewDepts())
}
const viewRoles = async() => {
    const emp = new db(connection);
    const roleAr = await emp.viewRoles();
    console.table(roleAr);
    init();
}
const addEmployee = async () => {
    let answers = await inquirer
        .prompt([
            {
            type: 'input',
            name: 'firstName',
            message: 'What is the employees first name?',

            },
            {
            type: 'input',
            name: 'lastName',
            message: 'What is the employees last name?',
           
            },
            {
                type: 'list',
                name: 'roleOption',
                message: 'General=1, Commander=2, Trooper=3, Pilot=4, Accountant=5, Pilot=6, Crew=7',
                choices: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                ]
            },
            {
                type: 'list',
                name: 'managerOption',
                message: 'Who is there manager? Emperor=1, The Dude=2',
                choices: [
                    "1",
                    "2"
                ]
            }
        ])
        const {firstName, lastName, roleOption, managerOption} = answers;
        const emp = new db(connection);
        const empAns = [firstName, lastName, roleOption, managerOption];
        console.log(empAns);
        await emp.addEmployee(empAns);
        init();
}

// const removeEmployee = () => {



// }
init()