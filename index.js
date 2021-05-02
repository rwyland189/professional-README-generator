// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        // GitHub username
        type: "input",
        name: "github",
        message: "Enter your GitHub username. (Required)",
        validate: gitHubUsername => {
            if (gitHubUsername) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        // Email
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        // project title
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        // description
        type: "input",
        name: "description",
        message: "Enter a short description of your project."
    },
    {
        // installation instructions
        type: "input",
        name: "installation",
        message: ""
    },
    {
        // license information
        type: "list",
        name: "license",
        message: "",
        choices: [
            "",
            "",
            ""
        ]
    },
    {
        // usage information
        type: "input",
        name: "usage",
        message: ""
    },
    {
        // contribution guidelines
        type: "input",
        name: "contribution",
        message: ""
    },
    {
        // test instructions
        type: "input",
        name: "test",
        message: ""
    },
    
]

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt(questions)
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
