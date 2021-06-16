import React from "react";
import { useNotes } from "../context/useNotes";

export default function SearchBox() {
  const { query, setQuery } = useNotes();
  return (
    <div className="main">
      <h2>Your Notes</h2>
      <input
        type="text"
        className="searchInput"
        placeholder="Search Notes"
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
      />
    </div>
  );
}
