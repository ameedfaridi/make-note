import React from "react";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import NoteList from "./components/NoteList";
import "./App.css";

export default function App() {
  return (
    <ComponentsContainer>
      <InputBox />
      <SearchBox />
      <NoteList />
    </ComponentsContainer>
  );
}

const ComponentsContainer = ({ children }) => {
  return (
    <div className="App">
      <div className="box">{children}</div>
    </div>
  );
};
