const chalk = require('chalk');
const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json'));
  } catch (err) {
    return [];
  }
}

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.json", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log(chalk.red(" Title already taken"));
  }
}

var removeNote = (title) => {
    
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.json", JSON.stringify(filteredNotes));
   if(notes.length === filteredNotes.length){
       console.log(chalk.red("note not found"));
   }else{
       console.log("note removed");
   }
}


var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNotes(note));
}

var logNote = (note) => {
  console.log("********************************");
  console.log(chalk.yellow(`Title: ${note.title}`));
  console.log(`Body: ${note.body}`);

}
var logNotes = (note) => {
    console.log("********************************");
    console.log(`Title: ${note.title}`);
    
  }


module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}