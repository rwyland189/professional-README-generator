// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//help: const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            type: "",
            name: "",
            message: ""
        },
        {
            // project title
            type: "",
            name: "",
            message: ""
        },
        {
            // description
            type: "",
            name: "",
            message: ""
        },
        {
            // installation instructions
            type: "",
            name: "",
            message: ""
        },
        {
            // usage information
            type: "",
            name: "",
            message: ""
        },
        {
            // contribution guidelines
            type: "",
            name: "",
            message: ""
        },
        {
            // test instructions
            type: "",
            name: "",
            message: ""
        },
        
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
