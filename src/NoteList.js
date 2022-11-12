import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

  const noteElement = searchMatches.map(renderNote);
  return <ul className="notes-list"> {noteElement}</ul>;
};

export default NoteList;
