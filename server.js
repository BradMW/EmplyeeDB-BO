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
                    "View Employees",
                    "Add an Employee",
                    "Add a Role",
                    "Add a Department",
                    "Update an Employee Role",
                    "Quit"
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
                case "View Employees":
                    viewEmployees()
                    break;
                case "Add an Employee":
                    addEmployee()
                    break;
                case "Add a Role":
                    addRole()
                    break;
                case "Add a Department":
                    addDepts()
                    break;
                case "Update an Employee Role":
                    updateRole()
                    break;
                    default:
                        process.exit();
                        console.log("all Done!");
            }
        })
}

const viewDepts = async() => {
    const emp = new db(connection);
    const deptAr = await emp.viewDepts();
    console.table(deptAr);
    init();
}
const viewRoles = async() => {
    const emp = new db(connection);
    const roleAr = await emp.viewRoles();
    console.table(roleAr);
    init();
}

const viewEmployees = async() => {
    const emp = new db(connection);
    const empAr = await emp.viewEmployees();
    console.table(empAr);
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
                message: 'Who is their manager? Emperor=1, The Dude=2',
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

const addRole = async () => {
    let answers = await inquirer
        .prompt([
           
            {
                type: 'input',
                name: 'title',
                message: 'What is the role?'
               
            },
            {
                type: 'input',
                name: 'wage',
                meassage: 'What is the wage?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Which department? Death Star =1, Coruscant=2, Hoth=3, Kashyyyk=4, Star Destroyers=5',
                choices: [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            }
        ])
        const {department_id, title, wage} = answers;
        const rle = new db(connection);
        const roleAns = [title, wage, department_id];
        console.log(roleAns);
        await rle.addRole(roleAns);
        init();
}

    const addDepts = async () => {
        let answers = await inquirer
            .prompt([
               
                {
                    type: 'input',
                    name: 'department_name',
                    message: 'What is the Department?'  
                }
            ])
            const {department_name} = answers;
            const dpts = new db(connection);
            const dptsAns = [department_name];
            console.log(dptsAns);
            await dpts.addDepts(dptsAns);
            init();
    }

    const updateRole = async () => {
        let answers = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'What is the last name of the employee you wish to update?'  
                },
                {
                    type: 'list',
                    name: 'roles_id',
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
            ])
            const {roles_id, last_name} = answers;
            const udpts = new db(connection);
            const updAns = [roles_id, last_name];
            console.log(updAns);
            await udpts.updateRole(updAns);
            init();
    }



// }
init()