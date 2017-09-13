var newNote = document.getElementById('newNote');
var noteTitle = document.getElementById('noteTitle');
var saveButton = document.querySelector('.save');

saveButton.addEventListener('click', keep);

let notes = [];

function keep() {
    note = newNote.value;
    newNote.value = '';
    notes.push (note);

    append();
}

function append() {
    let tablediv = document.getElementById('notes');
    tablediv.innerHTML='';

    let table = document.createElement('TABLE');
    var tablebody = document.createElement('TABLEBODY');

    table.border = '1';
    table.appendChild(tablebody);
    //table.innerHTML = '';
    let tr = document.createElement('TR');
    tablebody.appendChild(tr);
    let th = document.createElement('TH');
    th.appendChild(document.createTextNode(' notes '));
    tr.appendChild(th);
    //tablebody.appendChild(tr);

    for (i=0; i<notes.length; i++) {
        let tr = document.createElement('TR');
        //tr.id = i;

        let td = document.createElement('TD');
        let newContent = document.createTextNode(notes[i]);
        td.appendChild(newContent);
        tr.appendChild(td);

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'edit';
        editBtn.addEventListener('click', function(){ edit(i)});
        editBtn.id = 'edit'+i;
        tr.appendChild(editBtn);


        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'delete';
        deleteButton.addEventListener('click', function () { deleteNote(i)});
        tr.appendChild(deleteButton);


        table.appendChild(tr);
    }
        
    tablediv.appendChild(table);
}

function edit(id) {
    console.log(id);
}

function deleteNote(id) {
    notes.splice(id-1, 1);
    append();
}