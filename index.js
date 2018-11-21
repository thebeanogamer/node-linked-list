const chalk = require('chalk');
const clear = require('clear');
const clui = require('clui');
const figlet = require('figlet');
const inquirer   = require('inquirer');
const menu = require('inquirer-menu');

var running = true;
var toExecute = "";

clear();
const drawMenu = function() {console.log(figlet.textSync('Linked List', { horizontalLayout: 'full' }));};

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
