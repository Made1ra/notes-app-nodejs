import { Note } from '../models/note.model';

const notes: Note[] = [
    {
        id: 'mJw2V8QSJvXP8oxDRCxtx',
        name: 'Shopping list',
        created: '2021-04-20',
        category: 'Task',
        content: 'Tomatoes, bread',
        archived: false
    },
    {
        id: 'IlGyAgKu2kaYqkTCz3XsP',
        name: 'The theory of evolution',
        created: '2021-04-27',
        category: 'Random Thought',
        content: 'The evolution',
        archived: false
    },
    {
        id: '9yt7tuujSJSiEvpHv8bQW',
        name: 'New Feature',
        created: '2021-05-05',
        category: 'Idea',
        content: 'Implement new feature on the 5/5/2021, I moved it from 3/5/2021',
        archived: false
    },
    {
        id: 'c1M6f6kyHTInmry1_DqVf',
        name: 'William Gaddis',
        created: '2021-05-07',
        category: 'Random Thought',
        content: `Power doesn't come`,
        archived: false
    },
    {
        id: 'favgzqesK53D3SolNVa-E',
        name: 'Books',
        created: '2021-05-15',
        category: 'Task',
        content: 'The Lean Startup',
        archived: false
    },
    {
        id: 'z9-LNyQqIELrBgfmzMezZ',
        name: 'Gym',
        created: '2022-01-01',
        category: 'Task',
        content: 'Leg day',
        archived: false
    },
    {
        id: 'TT8qKOgNPsbh5Ehf1mfEW',
        name: 'Swimming pool',
        created: '2023-07-25',
        category: 'Task',
        content: 'Improve my freestyle',
        archived: false
    }
];

export function addNote(note: Note) {
    return [...notes, note];
}

export function getNote(id: string) {
    return notes.filter((note) => note.id === id);
}

export function getAllNotes() {
    return notes;
}

export function editNote(id: string, editedNote: Note) {
    return notes.map((note) => {
        if (note.id === id) {
            return { ...note, ...editedNote };
        } else {
            return note;
        }
    });
}

export function removeNote(id: string) {
    return notes.filter((note) => note.id !== id);
}
