const searchTerm = "Perfect"

const notes = [
    {
    id: 1,
    subject: "GitHub",
    date: "05/24/2021",
    feeling: "Good",
    timeSpent: 8 
    },
    {
    id: 2,
    subject: "GitHub",
    date: "05/25/2021",
    feeling: "Perfect",
    timeSpent: 8 
    }

]

const noteAboutToday = {
    id: 3,
    subject: "JavaScript",
    date: "05/27/2021",
    feeling: "Good",
    timeSpent: 8 
}
const newNote = {
    subject: "JavaScript",
    date: "05/27/2021",
    feeling: "Great",
    timeSpent: 8 
}

notes.push(noteAboutToday)

// filtering through the "notes" array by searching the "feeling" key on the "note" object
for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(note)
    }
}

// Taking a new note and adding the "id" property onto each "note" object, then pushing them to the "notes" array. 
const createNote = (noteObject) => {
    const lastIndex = notes.length - 1 
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id 
    const idForNewNote = maxId +1 

    noteObject.id = idForNewNote
    notes.push(notes)
}

createNote(newNote)

for (note of notes) {
    console.log(newNote)
}