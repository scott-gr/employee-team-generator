//Dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//output to html
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
//empty array to be filled with generated employee objects
const employees = [];

const teamOutput = (path, data) => {
  fs.writeFile(path, render(data), (error) => {
    if (error) throw error;
    else console.log('Output HTML success');
  });
};

const askPrompt = () => {
  inquirer.prompt(questions.employeeRoleQ).then((data) => {
    switch (data.role) {
      /// test first with manager

      case 'manager':
        inquirer.prompt(questions.managerQuestions).then((data) => {
          if (
            data.mgrName === '' ||
            data.mgrId === '' ||
            data.mgrEmail === '' ||
            data.mgrOfficeNum === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let manager = new Manager(
              data.mgrName,
              data.mgrId,
              data.mgrEmail,
              data.mgrOfficeNum
            );
            employees.push(manager);
            if (data.confirm) {
              askPrompt();
            } else {
              outputHtml(outputPath, employees);
            }
          }
        });
        break;
      case 'engineer':
        inquirer.prompt(questions.engineerQuestions).then((data) => {
          if (
            data.engName === '' ||
            data.engId === '' ||
            data.engEmail === '' ||
            data.engGithub === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let engineer = new Engineer(
              data.engName,
              data.engId,
              data.engEmail,
              data.engGithub
            );
            employees.push(engineer);
            if (data.confirm) {
              askPrompt();
            } else {
              teamOutput(outputPath, employees);
            }
          }
        });
        break;
      case 'intern':
        inquirer.prompt(questions.internQuestions).then((data) => {
          if (
            data.intName === '' ||
            data.intId === '' ||
            data.intEmail === '' ||
            data.intSchool === ''
          ) {
            console.log('Please enter a value for each prompt!');
            askPrompt();
          } else {
            let intern = new Intern(
              data.intName,
              data.intId,
              data.intEmail,
              data.intSchool
            );
            employees.push(intern);
            if (data.confirm) {
              askPrompt();
            } else {
              teamOutput(outputPath, employees);
              r;
            }
          }
        });
        break;
    }
  });
};

//else if engineer input, create new manager with data from fields

//else if intern input, create new manager with data from fields

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// use tests!
// Employee class first
/// types are subclasses
/// 1 prompt
/// 1 prompt what kind of team member
/// another function inquirer.prompt

///manager.test - calling get office # method, not mentioned in readme
