console.log("Starting app.js");

const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');

//3rd party modules
const note=require('./notes.js');

var argv=yargs.argv;
var cmd=process.argv[2];
console.log('Command:',cmd);

if(cmd ==='add' || cmd ==='Add')
{
    var notes=note.addNote(argv.title,argv.body);
    if(notes === undefined)
    {
        console.log("Note already exists");
    }
    else
    {
        console.log("Note Added");
    }

}
else
    if(cmd ==='length' || cmd ==='Length')
    {
        var notes=note.lisNote();
        console.log(`Length:${notes.length}`);
    }
    else
        if(cmd ==='delete'|| cmd =='Delete')
        {
            var notes=note.delNote(argv.title);
            console.log(notes);
        }
        else
            if(cmd ==='read')
            {
                var notes=note.readNote(argv.title);
                if(notes)
                {
                    console.log(notes.title,notes.body);
                }
                else
                {
                    console.log("note not found");

                }
            }