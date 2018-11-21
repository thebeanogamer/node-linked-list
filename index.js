const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
var Table = require('cli-table');

var running = true;
var toExecute = "";

clear();
const drawTitle = function() {
  console.log(figlet.textSync('Linked List', {
    horizontalLayout: 'full'
  }));
};

var linkedList = [{"indexPointer": 0, "dataValues": [], "pointer": []}];

const add = function(value) {
  console.log("added");
  // TODO: Write add function
}

const remove = function(value) {
  console.log("removed");
  // TODO: Write remove function
}

const view = function() {
  console.log("Viewed");
  // TODO: Write view function
}

const search = function() {
  console.log("searched");
  // TODO: Write search function
}

drawTitle();

const questions = [
    { type: 'input', name: 'command', message: 'Please select a command (add/remove/view/search/exit): '},
];

const mainMenu = async function() {
  await inquirer
      .prompt(questions)
      .then(function (answers) {
          switch (answers.command.toLowerCase()) {
            case "add" :
              add();
              break;
            case "remove":
              remove();
              break;
            case "view":
              view();
              break;
            case "search":
              search();
              break;
            case "exit":
              process.exit();
          }
  })
}

const main = async function() {
  while (running) {
    await mainMenu()
  }
}

main();
