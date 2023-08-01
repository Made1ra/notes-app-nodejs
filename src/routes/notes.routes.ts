import express from 'express';
import { noteSchema } from '../helpers/validation.helpers';
import * as NoteService from '../services/notes.service';
import { Note } from '../models/note.model';
import * as yup from 'yup';

const router = express.Router();

router.post('/notes', (req, res) => {
    const newNote: Note = req.body;

    try {
        noteSchema.validateSync(newNote);
        NoteService.addNote(newNote);
        res.status(201).json({ message: 'Note created successfully.' });
    } catch (error: unknown) {
        if (error instanceof yup.ValidationError) {
            const errors = error.inner.map((err) => ({
                path: err.path ?? '',
                message: err.message ?? ''
            }));
            res.status(400).json({ message: 'Validation error.', errors });
        }
    }
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    NoteService.removeNote(id);
    res.json({ message: 'Note deleted succesfully.' });
});

router.patch('/notes/:id', (req, res) => {
    const id = req.params.id;
    const editedNote: Note = req.body;

    try {
        noteSchema.validateSync(editedNote);
        NoteService.editNote(id, editedNote);
        res.json({ message: 'Note updated succesfully.' });
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            const errors = error.inner.map((err) => ({
                path: err.path ?? '',
                message: err.message ?? ''
            }));
            res.status(400).json({ message: 'Validation error.', errors });
        }
    }
});

router.get('/notes/stats', (req, res) => {
    const notes = NoteService.getAllNotes();
    const stats = {
        total: notes.length,
        activeNotes: notes.filter((note) => !note.archived).length,
        archivedNotes: notes.filter((note) => note.archived).length
    };
    res.json(stats);
});

router.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = NoteService.getNote(id);

    if (note.length !== 0) {
        res.json(note);
    } else {
        res.status(404).json({ message: 'Note not found.' });
    }
});

router.get('/notes', (req, res) => {
    const notes = NoteService.getAllNotes();
    res.json(notes);
});

export default router;
