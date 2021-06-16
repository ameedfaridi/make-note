import React, { createContext, useContext } from "react";

const NoteContext = createContext();

export const useNotes = () => {
  return useContext(NoteContext);
};

export default function NotesProvider({ children }) {
  const [noteState, setNoteState] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const ifSearched = query !== "";

  const addNote = (newNoteObj) => {
    setNoteState((prevNoteState) => {
      return [...prevNoteState, newNoteObj];
    });
  };

  const deleteNote = (id) => {
    setNoteState((prevNoteState) => {
      return prevNoteState.filter((noteObj) => noteObj.id != id);
    });
  };

  const editNote = (id, value) => {
    setNoteState((prevNoteState) => {
      return prevNoteState.map((noteObj) => {
        if (noteObj.id === id) {
          noteObj.note = value;
        }
        return noteObj;
      });
    });
  };

  const newNoteState = ifSearched
    ? noteState.filter((noteObj) =>
        noteObj.note.toLowerCase().includes(query.toLowerCase())
      )
    : noteState;

  const value = {
    newNoteState,
    addNote,
    deleteNote,
    query,
    setQuery,
    editNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
