var newNote = document.getElementById('newNote');
var saveButton = document.querySelector('.save');

saveButton.addEventListener('click', keep);

if (localStorage.getItem('notas')){
    var notes = (JSON.parse(localStorage.getItem('notas')));
    append();
} else { var notes = [];}

function keep() {
    note = newNote.value;
    newNote.value = '';
    notes.push (note);

    append();

    localStorage.setItem('notas', JSON.stringify(notes));

    console.log(JSON.parse(localStorage.getItem('notas')));
}

function append() {
    let tablediv = document.getElementById('notes');
    tablediv.innerHTML='';

    let table = document.createElement('TABLE');
    var tablebody = document.createElement('TABLEBODY');

    table.border = '1';
    table.appendChild(tablebody);
    let tr = document.createElement('TR');
    tablebody.appendChild(tr);
    let th = document.createElement('TH');
    th.appendChild(document.createTextNode(' notes '));
    tr.appendChild(th);

    for (i=0; i<notes.length; i++) {
        let tr = document.createElement('TR');

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
    console.log(notes);
    console.log(id);
    let editNote = notes[id];
    console.log(editNote);
    newNote.textContent = editNote;
}

function deleteNote(id) {
    notes.splice(id-1, 1);
    append();
}