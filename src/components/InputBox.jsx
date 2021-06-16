import React from "react";
import { useNotes } from "../context/useNotes";

export default function InputBox() {
  const { addNote } = useNotes();
  const [note, setNote] = React.useState("");
  const [date, setDate] = React.useState("");
  const noNote = note === "";
  const noDate = date === "";
  const validateDate =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const noFormattedDate = validateDate.test(date);
    if (noNote || noDate || noFormattedDate) {
      return alert("Please Enter properly");
    } else {
      const noteObj = {
        id: Math.random(),
        note,
        date,
      };
      addNote(noteObj);
      setNote("");
      setDate("");
    }
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter Note"
          value={note}
          onChange={({ target: { value } }) => setNote(value)}
        />
        <input
          type="text"
          placeholder="dd-mm-yyyy "
          value={date}
          onChange={({ target: { value } }) => setDate(value)}
        />
      </div>
      <button>Add</button>
    </form>
  );
}
