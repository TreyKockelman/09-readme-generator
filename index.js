// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "What is your project description?", "What are your installation instructions?", "What usage information would you like to include?", "What licenses were used in this project?", "Who is contributing to this project?", "What test instructions would you like to include?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) =>
  err ? console.log("error") : console.log('ReadMe Created!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
  {
    type: 'input',
    message: questions[0],
    name: 'title',
  },
  {
    type: 'input',
    message: questions[1],
    name: 'description',
  },
  {
    type: 'input',
    message: questions[2],
    name: 'installation',
  },
  {
    type: 'input',
    message: questions[3],
    name: 'usage',
  },
  {
    type: 'list',
    message: questions[4],
    choices: ['MIT', 'GNU General', 'BSD2'],
    name: 'license',
  },
  {
    type: 'input',
    message: questions[5],
    name: 'contributing',
  },
  {
    type: 'input',
    message: questions[6],
    name: 'tests',
  },
  {
    type: 'input',
    message: questions[7],
    name: 'username',
  },
  {
    type: 'input',
    message: questions[8],
    name: 'email',
  },
])
.then((data) => {writeToFile(generateMarkdown(data))})
};

// Function call to initialize app
init();