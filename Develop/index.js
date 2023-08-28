'use strict'

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


// TODO: Create an array of questions for user input
var data = {
  title: "",
  madLibs: "",
  motivation:"",
  reasonWhy:"",
  solvesProblem:"",
  learned:"",
  standsOut:"",
  installation:"",
  usage:"",
  collaborators:[{name:"",role:"",link:""}],
  badges:[{l:"",r:"",color:""}],
  features:[{name:"",description:""}]
}

const AnswerLogic = {
  isYes: function(text){
    if(text.toUpperCase() === "Y" || text.toUpperCase() === "YES"){
      return true
    }
    else{
      return false
    }
  },
  isNo: function(text){
    if(text.toUpperCase() === "N" || text.toUpperCase() === "NO"){
      return true
    }
    else{
      return false
    }
  },
}

const questions = [
  {
    type:'input',
    message:'Please enter your name.',
    name:'devName',
  },
  {
    type:'input',
    message:'Please enter your GitHub profile name (case sensitive!).',
    name:'github',
  },
  {
    type:'input',
    message:'Please enter your email.',
    name:'devEmail',
  },
  {
    type:'input',
    message:'Please enter the name of your Project.',
    name:'title',
  },
  {
    type:'input',
    message:'Explain the purpose of your project, why you made it, and how your project solves that problem.',
    name:'summary',
  },
  {
    type:'input',
    message:'Explain how to install your project.',
    name:'installation',
  },
  {
    type:'input',
    message:'Explain how to use your project.',
    name:'usage',
  },
  {
    type:'input',
    message:'Please list any and all collaborators, tutorials, or third-party sources.',
    name:'collaborators',
  },
  {
    type:'input',
    message:'Please describe how a user can test your program for errors.',
    name:'tests',
  },
  {
    type:'list',
    message:'What license would you like to use?',
    name:'license',
    choices:generateMarkdown.licenses
  },

]
// TODO: Create a function to write README file
// the file name is always going to be README, why bother with a file name?
function writeToFile(data, path = ".") {
  console.log("Writing data to "+path+"/README.md...");
  fs.writeFile(path+"/README.md", data, function(err){
    if(err !== null){
      console.log("Successfully wrote README.md to "+path+"/README.md.");
    }
    else{
      console.log("Couldn't write to file. Error message:");
      console.error(err);
    }
  })
}

// TODO: Create a function to initialize app
const init = async () =>{
  await inquirer
  .prompt(questions)
  .then(function(response){
    console.log(response);
    var s = generateMarkdown.generateMarkdown(response);
    writeToFile(s);
  }
  );
}

// Function call to initialize app
init();