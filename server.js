const express = require('express');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const db = require('./db/index')
// Import and require mysql2
// const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Root1234',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
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
            }
        })
}

const viewDepts = () => {
    console.table(db.viewDepts())
}
const viewRoles = () => {
    console.table(db.viewRoles())
}
const addEmployee = () => {
    inquirer
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
                name: 'ManagerOption',
                message: 'Who is there manager? Emperor=1, The Dude=2',
                choices: [
                    "1",
                    "2"
                ]
            }
        ])
const removeEmployee = () => {

}
}

init()