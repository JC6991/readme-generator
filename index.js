// using inquirer pre-version 9
// import inquirer and fs using require
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


 
inquirer
  .prompt([
    // array of objects to pass the questions
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How is your project installed?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How is your project used?'
    },
    {
        type: 'list',
        message: '',
        name: 'License',
        choices: ['MIT', 'Mozilla Public License 2.0', 'Open Database License (ODbL)', 'GNU GPL v3', 'GNU AGPL v3', 'GNU GPL v2'],
        default: 'MIT'
      },    
    {
        type: 'input',
        name: 'Contributing',
        message: 'Are there any collaborators for this project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please provide any information about testing.'
    },    
    {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your email address.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github name.'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.table(answers);
    
    let markdownData = generateMarkdown({answers});

    //   function to write README file
    fs.writeFile('README.md', markdownData, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  })



// function to initialize program
function init() {

}

// function call to initialize program
init();

  