const fs=require('fs');

//notes array

var fetchNotes=()=>{
    try{
        var rf=fs.readFileSync('note-data.json');
        return JSON.parse(rf);
    }catch(e) {
        return [];
    }
};

var saveNotes=(notes)=>
{
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
}
var getAll=()=> {
    return fetchNotes();
}
var addNote=(title,body)=>
{
    var notes=fetchNotes();
    var note={
        title,
        body
    };

    var duplicateNotes=notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var delNote=(title)=>
{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title !== title);
    saveNotes(filteredNotes);
    if(notes.length === filteredNotes.length)
    {
        return "No Notes Removed";
    }
    else
    {
        return "Note Removed";
    }
}
var lisNote=()=>
{
    var notes=getAll();
    return notes;
}
var readNote=(title)=> {
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title === title);
    return filteredNotes[0];

}
module.exports={
    addNote,
    delNote,
    lisNote,
    readNote
};