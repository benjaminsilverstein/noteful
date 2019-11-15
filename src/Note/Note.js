import React from "react";
import "./Note.css";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div className="note">
      <Link to="/">
        <h2>{props.name}</h2>
      </Link>
      <p className="modified">Date modified on {props.modified} </p>
      <button className="deleteNote">Delete Note</button>
    </div>
  );
}
