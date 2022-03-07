console.log("Starting app.js");
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log(chalk.yellow("adding note"));
  notes.addingNote(title, body);
} else if (command === "remove") {
  
  notes.removeNote(title);
} else if (command === "read") {
  console.log("reading ");
  notes.readNote(title);
} else if (command === "list") {
  console.log(chalk.blue("your notes"));
  notes.getAll();
} else {
  console.log("Unknown command was used!");
}