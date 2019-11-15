import React from "react";
import "./PrimaryNav.css";
import { NavLink } from "react-router-dom";

export default function Note(props) {
  return (
    <NavLink className="folder" to={`/folder/${props.folderId}`}>
      <h2>{props.name}</h2>
    </NavLink>
  );
}
