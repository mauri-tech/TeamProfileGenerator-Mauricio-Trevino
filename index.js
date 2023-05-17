const fs = require('fs');
const inquirer = require('inquirer');
const htmlGenerator = require('./src/htmlGenerator');
const teamMembers = [];
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const generateManager = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
      validate: (input) => input !== '' || 'Please enter the team manager name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager email address',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
      validate: (input) =>
        input !== '' || 'Please enter the team manager office number',
    },
  ];

  const managerInfo = await inquirer.prompt(questions);
  const { name, id, email, officeNumber } = managerInfo;
  const newManager = new Manager(name, id, email, officeNumber);
  teamMembers.push(newManager);
  console.log(newManager);
  addEmployee();
};

const generateEngineer = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team engineer email address',
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
      validate: (input) =>
        input !== '' || 'Please enter the engineer GitHub username',
    },
  ];

  const engineerInfo = await inquirer.prompt(questions);
  const { name, id, email, github } = engineerInfo;
  const newEngineer = new Engineer(name, id, email, github);
  teamMembers.push(newEngineer);
  console.log(newEngineer);
  addEmployee();
};

const generateIntern = async () => {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
      validate: (input) => input !== '' || 'Please enter the team intern name',
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's employee ID?",
      validate: (input) =>
        input !== '' || 'Please enter the team intern employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email address?",
      validate: (input) =>
        input !== '' || 'Please enter the team intern email address',
      },
      {
      type: 'input',
      name: 'school',
      message: "What is the intern's school name?",
      validate: (input) =>
      input !== '' || 'Please enter the intern school name',
      },
      ];
      
      const internInfo = await inquirer.prompt(questions);
      const { name, id, email, school } = internInfo;
      const newIntern = new Intern(name, id, email, school);
      teamMembers.push(newIntern);
      console.log(newIntern);
      addEmployee();
      };
      
      generateManager();
      
      async function addEmployee() {
      const employeeTypes = {
      Manager: generateManager,
      Engineer: generateEngineer,
      Intern: generateIntern,
      None: () => {
      const generatedHtml = htmlGenerator(teamMembers);
      fs.writeFileSync('./public/teamOverview.html', generatedHtml);
      console.log('HTML file generated successfully.');
      },
      };
      
      const { employeeType } = await inquirer.prompt([
      {
      type: 'list',
      name: 'employeeType',
      message: 'Do you want to add another team member?',
      choices: Object.keys(employeeTypes),
      },
      ]);
      
      const generateEmployee = employeeTypes[employeeType];
      if (generateEmployee) {
      await generateEmployee();
      } else {
      console.log('Invalid input');
      }
      }
