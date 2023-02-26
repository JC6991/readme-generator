// using inquirer pre-version 9
// import inquirer and fs using require
const inquirer = require('inquirer');
const fs = require('fs');

// 
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
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description for your project.'
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
        name: 'Description',
        message: 'Please enter a description for your project.'
    },
    {
        type: 'list',
        message: '',
        name: 'License',
        choices: ['MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'The Unlicense', 'GNU Lesser General Public License v3.0'],
        default: 'MIT'
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Please enter your email address.'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })

  