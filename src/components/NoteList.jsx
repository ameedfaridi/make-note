import React from "react";
import { useNotes } from "../context/useNotes";

export default function NoteList() {
  const { newNoteState, deleteNote, editNote } = useNotes();

  return (
    <div>
      {newNoteState.length ? (
        newNoteState.map(({ note, date, id }) => (
          <div className="noteBox" key={id}>
            <div style={{ display: "grid" }}>
              <input
                value={note}
                className="editInput"
                style={{ fontSize: "1.5rem" }}
                onChange={({ target: { value } }) => editNote(id, value)}
              />
              <h6>{date}</h6>
            </div>
            <button className="btn del" onClick={() => deleteNote(id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="noRecord">No record present</div>
      )}
    </div>
  );
}
