const inquirer = require ("inquirer");
const fs = require("fs");
const engineer = require ("//file for engineer")
const employee = require ("//file for engineer")
const Manager = require ("//file for engineer")
const Intern = require ("//file for engineer")

//prompts request for the classes//
const engineerPrompts = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "number",
        message: "What is your ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "GitHub",
    },
]
const MangerPrompts =[
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "number",
        message: "What is your ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "GitHub",
    },
]
const EmployeePrompts = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "number",
        message: "What is your ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "GitHub",
    },
    {
        type: "number",
        message: "What is your Officenumber",
        name:"officenumber"
    }
]
const InternPrompts = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "number",
        message: "What is your ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "Email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "GitHub",
    },
    {
        type: "input",
        messsage: "What school did you attend?",
        name: "school"
    },

]

//start the app

