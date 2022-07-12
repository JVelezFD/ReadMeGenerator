// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        //Using markdown layout for each question
        //Q1 - Project Title 
        {type: 'input',
        name: 'title',
        message: '(Required) Enter your project title',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            }else{
                console.log('Please enter a title for your project');
                return false;
            }
        },

        },
        //Q2 - Description
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: (nameInput) => {
                if (nameInput){
                    return true; 
                }else {   
                    console.log('Please enter your project description')
                    return false; 
                 
                }
            },
        },
        //Q3 - Installation 
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for project installation',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please enter installation instruction');
                    return false;
                }
            },
        },
        //Q4 - Usage
        {
            type: 'input',
            name: 'usage',
            message: 'Enter project usage info',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please enter project usage info');
                    return false;
                }
            },
        },
        //Q5- Contribute
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter guidelines for contribution process',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please enter contribution guidelines');
                    return false;
                }
            },
        },
        //Q6- Tests
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing guidelines for your project',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please enter testing guidelines for your project');
                    return false;
                }
            },
        },
        //Q7 - Credits
        {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please list your collaborators');
                    return false;
                }
            },
        },
        //Q8- Features
        {
            type: 'input',
            name: 'features',
            message: 'Enter project features if there are many',
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please enter all features');
                    return false;
                }
            },
        },
        //Q9 - License
        {
            type: 'list',
            name: 'license',
            message: 'Choose your software license for this project',
            choices: ['MIT', 'Community License', 'GNU GPLv3', 'N/A'],
            validate: (nameInput)=>{
                if(nameInput){
                    return true; 
                }else {
                    console.log('Please choose a license for your project');
                    return false;
                }
            },
        },

    ])
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            console.error(err);
        }
    })
    
}

// TODO: Create a function to initialize app
function init() {
    questions().then((data)=>{
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();



//return new Promise((resolve, reject) => {
  //  fs.writeFile( 'Develop/README.md', questions(data), (err)=>{
    //    if (err) {
      //      console.log(err)
        //  reject(err);
          //return;
       // }
       // resolve({yes: true, message: 'readme created'});
     // });
//})