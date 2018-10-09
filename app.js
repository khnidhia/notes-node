
console.log('Starting app.js');

const os=require('os');
const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const argv=yargs.argv;
const notes=require('./notes.js');


var command=process.argv[2];
console.log('command:',command);
console.log('process',process.argv);
console.log('Yargs',argv);
if(command==='add'){
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		console.log("Note created");
		console.log("--");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	}
	else{
		console.log("note title taken");
	}
}
else if(command==='list'){
	notes.getAll();
	console.log('listing all nodes');
}
else if(command==='remove'){
	console.log('removing node');
	var noteRemoved=notes.removeNote(argv.title);
	var message=noteRemoved?'note was removed':'note not found';
	console.log(message);

}
else{
	console.log('command nort recognised');
}


//fs.appendFileSync('greetings.txt','hello world!');



// requiring a build in file
//res=notes.add(2,5);
//console.log(res);
//var user=os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt',`hello ${user.username}. You are ${notes.age}`);
//console.log(_.isString(true));
//console.log(_.isString('true'));
//var filteredArray=_.uniq(['andrew','andrew',]);
//console.log(filteredArray);
