const chalk = require('chalk');
const clear = require('clear');
const clui = require('clui');
const figlet = require('figlet');
const inquirer   = require('inquirer');

var running = true;
var toExecute = "";

clear();
console.log(figlet.textSync('Linked List', { horizontalLayout: 'full' }));

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

const command = [
  {
    name: 'command',
    type: 'input',
    message: 'Please input a command (add/remove/view/search):',
    validate: function( value ) {
      if (value.length && (value.toLowerCase() == "add") || (value.toLowerCase() == "remove") || (value.toLowerCase() == "view") || (value.toLowerCase() == "search")) {
        return value;
      } else {
        return 'Please enter a valid command.';
      }
    }
  },
];

const menu = async function() {
  while (running == true) {
    toExecute = await inquirer.prompt(command);
    switch (toExecute) {
      case "add":
        add()
      case "remove":
        remove()
      case "view":
        view()
      case "search":
        search()
  }
}
};

menu();
