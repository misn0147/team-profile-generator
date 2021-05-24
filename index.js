const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateManagerCard, generateEngineerCard, generateInternCard } = require('./src/page-template');
let allEmployees = [];
const generatePage= require('./utils/generate-HTML');


const enterManager = managerInput => {
    return inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
                validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
                }
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
            var newManager = generateManagerCard(manager);
            allEmployees.push(newManager);
            console.log(manager);
        })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let { name, id, role, email, github, school, confirmAddEmployee } = employeeInfo;
        if (role === "Engineer") {
            let employee = new Engineer (name, id, email, github);
            var newEngineer = generateEngineerCard(employee);
            allEmployees.push(newEngineer);
            console.log(employee);
        } else if (role === "Intern") {
            let employee = new Intern (name, id, email, school);
            var newIntern = generateInternCard(employee);
            allEmployees.push(newIntern);
            console.log(employee);
        }
        if (confirmAddEmployee) {
            return addEmployee();
        } else {
            console.log(allEmployees);
            var template = generatePage(allEmployees)
            fs.writeFile('TeamProfile.html', template, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        })
        }
    })
}

enterManager()
    .then(addEmployee);
