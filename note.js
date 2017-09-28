var newNote = document.getElementById('newNote');
var saveButton = document.querySelector('.save');

saveButton.addEventListener('click', keep);

if (localStorage.getItem('notas')){
    var notes = (JSON.parse(localStorage.getItem('notas')));
    append();
} else { var notes = {};}

function keep() {
    note = newNote.value;
    let date = new Date();

    if (newNote.name){
        newData = {
            'note' : note,
            'modified' : date,}
        
        notes[newNote.name].note = newData.note;
        notes[newNote.name].modified = newData.modified;
        newNote.removeAttribute('name');


    }else {
        let fullNote = {
            'note' : note,
            'created' : date,
            'modified' : '',
        }
        notes.push (fullNote);
    }

    newNote.value ='';

    append();
}

function append() {
    let tablediv = document.getElementById('notes');
    tablediv.innerHTML='';

    let table = document.createElement('TABLE');

    table.border = '1';
    let tr = document.createElement('TR');
    table.appendChild(tr);
    let th = document.createElement('TH');
    th.appendChild(document.createTextNode(' notes '));
    let th1 = document.createElement('TH');
    th1.appendChild(document.createTextNode(' created '));
    let th2 = document.createElement('TH');
    th2.appendChild(document.createTextNode(' modified '));
    
    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);


    for (i=0; i<notes.length; i++) {
        let tr = document.createElement('TR');

        let td = document.createElement('TD');
        let newContent = document.createTextNode(notes[i].note);
        td.appendChild(newContent);
        tr.appendChild(td);

        let dateTD = document.createElement('TD');
        let created = document.createTextNode(notes[i].created);
        dateTD.appendChild(created);
        tr.appendChild(dateTD);

        let modifiedTD = document.createElement('TD');
        let modified = document.createTextNode(notes[i].modified);
        modifiedTD.appendChild(modified);
        tr.appendChild(modifiedTD);

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'edit';
        editBtn.id = i;
        editBtn.addEventListener('click', function(){ edit(editBtn.id)});
        tr.appendChild(editBtn);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'delete';
        deleteButton.id = i;
        deleteButton.addEventListener('click', function () { deleteNote(deleteButton.id)});
        tr.appendChild(deleteButton);


        table.appendChild(tr);
    }
        
    tablediv.appendChild(table);
    localStorage.setItem('notas', JSON.stringify(notes));
}

function edit(id) {
    
    let editNote = notes[id];

    newNote.value = editNote.note;
    newNote.setAttribute('name', id);
}

function deleteNote(id) {

    notes.splice(id, 1);
    append();
}