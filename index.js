const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

function Profile() {   
}

Profile.prototype.initialize = function() {
    inquirer
        .prompt(
            {
            type: 'text',
            name: 'managerName',
            message: "What is your team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name.");
                    return false;
                }
            }
            })
            .then(({name}) => {
                this.manager = new Manager(name);
            })
        .prompt(    
            {
            type: 'number',
            name: 'managerId',
            message: "What is your team manager's employee ID?"
            },
            {
            type: 'text',
            name: 'managerEmail',
            message: "What is your team manager's email address?"
            },
            {
            type: 'number',
            name: 'managerOfficeNumber',
            message: "What is your team manager's office number?"
            },
        )
}