import { Note } from '../models/note.model';
import * as NoteRepository from '../repositories/notes.repository';

export function addNote(note: Note) {
    NoteRepository.addNote(note);
}

export function removeNote(id: string) {
    NoteRepository.removeNote(id);
}

export function editNote(id: string, editedNote: Note) {
    NoteRepository.editNote(id, editedNote);
}

export function getNote(id: string) {
    return NoteRepository.getNote(id);
}

export function getAllNotes() {
    return NoteRepository.getAllNotes();
}
