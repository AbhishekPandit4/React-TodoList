import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import corssImage from "./assets/cross-icone.png";
import Edit from "./assets/edit.png";
import Save from "./assets/save.jpg";

export default function TodoList(props) {
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [newText, setNewText] = useState(props.text); // State to store new text while editing

  const handleEdit = () => {
    setIsEditing(true); // Enable edit mode
  };

  const handleSave = () => {
    props.onEdit(props.id, newText); // Call parent function to save the updated text
    setIsEditing(false); // Disable edit mode after saving
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={props.isChecked} // The checked state of the item
        onChange={() => props.onCheck(props.id)} // Toggle the check state
        style={{height:20}}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ marginLeft: "10px" }} // Add space between checkbox and text input during edit mode
        />
      ) : (
        // Apply strikethrough if the item is checked
        <ul
          style={{
            marginLeft: "10px",
            textDecoration: props.isChecked ? "line-through" : "none",
            // height: 50,
            width: 300,
            // backgroundColor: "red",
          }}
        >
          {props.text}
        </ul>
      )}
      &nbsp;&nbsp;
      {!isEditing ? (
        <>
          <img src={Edit} onClick={handleEdit} style={{ height: 30 }} />
          <img
            src={corssImage}
            className="img"
            onClick={() => {
              props.onSelect(props.id);
            }}
            alt="Delete"
            style={{ marginLeft: "10px", marginRight: "10px" }} // Add space around the delete icon
          />
        </>
      ) : (
        <>
          <img src={Save} onClick={handleSave} style={{ height: 40 }} />
        </>
      )}
    </div>
  );
}
