// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    // title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // inquirer
    // .prompt([
        // just checking that the questions work
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "Can you describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What do you need/ how do you install the program?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use/run the project?",
        name: "usage",   
    },
    {
        type: "list",
        message: "Which license will you use for this project?",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "none"],   
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributing",   
    },
    {
        type: "input",
        message: "What are the testing instructions to assist users?",
        name: "tests",   
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
// ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Success!"))}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile("./utils/testreadme.md", response));
    }
// Function call to initialize app
init();
