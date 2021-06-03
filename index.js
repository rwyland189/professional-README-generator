// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// grabbing function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
        message: "Please describe the installation process for your project."
    },
    {
        // license information
        type: "list",
        name: "license",
        message: "What is the licensing for your project?",
        choices: [
            "MIT",
            "Apache",
            "GPLv3"
        ]
    },
    {
        // usage information
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project."
    },
    {
        // contribution guidelines
        type: "input",
        name: "contribution",
        message: "Who are the project contributors?"
    },
    {
        // test instructions
        type: "input",
        name: "test",
        message: "Please describe the tests performed on this project."
    }
]

const askQuestions = () => {
    return inquirer.prompt(questions)
};

// TODO: Create a function to initialize app
function init() {
    askQuestions().then(answers => {
        console.log(answers)
        var markdown = generateMarkdown(answers)
        console.log(markdown)
        fs.writeFile('markdown.md', markdown, function (err) {
            if (err) throw err;
          });
    })
}

// Function call to initialize app
init();
