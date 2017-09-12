var newNote = document.getElementById('newNote');
var noteTitle = document.getElementById('noteTitle');
var saveButton = document.querySelector('.save');

saveButton.addEventListener('click', keep);

function keep() {
    note = newNote;
    newNote.value = ' ';
}

