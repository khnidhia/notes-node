console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
	note={
		title
	}
  var notes= fetchNotes();
  //filter
  var removeNote= notes.filter((note)=>note.title!=title);
  
  //removing one with title
  saveNotes(removeNote);

  if(removeNote.length===notes.length){
  	return false;
  }
  else{
  	return true;
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};












//console.log(module);
//module.exports.age=25;
//module.exports.addNote=()=>{
//	console.log('addNote');
//	return 'new note';
//}
//module.exports.add=(a,b)=>{
//	var ans=a+b;
//	return ans;
//}