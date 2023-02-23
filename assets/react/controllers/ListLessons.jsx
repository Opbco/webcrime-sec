import React from "react";
import "./styles/appNotes.css";

const ListLessons = ({ lessons, progression, current }) => {
  const notes = JSON.parse(lessons);
  const position = JSON.parse(progression);
  const lesson = current || position.niveau.apprentissage?.id || 1;

  return (
    <div className="app-notes">
      <div className="head">
        <i className="fas fa-crown"></i>
        <h2>Apprentissages</h2>
      </div>
      <div className="app-list-notes">
        {notes.map((note, index) => (
          <div
            key={`notes-${index}`}
            className={`app-list-note ${
              note.niveau.id <= position.niveau.id ? "passed" : ""
            } ${note.id === lesson ? "current" : ""}`}
          >
            <a href={`/learn/${note.id}`}>
              <div className="app-list-note_title">{note.title}</div>
              <div className="app-list-note_footer">
                <span>Niveau : {note.niveau.libelle}</span>
                <span>Stade : {note.niveau.stade.libelle}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListLessons;
