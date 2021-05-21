const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/page-template');


const enterManager = managerInput => {
    return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
            },
            {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee ID?"
            },
            {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?"
            },
            {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?"
            },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber} = managerInput;
            const manager = new Manager (name, id, email, officeNumber);

            console.log(manager);
        })
}

enterManager();