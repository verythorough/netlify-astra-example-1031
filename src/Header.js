import React from "react";
import TodoTextInput from "./TodoTextInput";

const Header = ({ title, addTodo }) => {
  const handleSave = (text) => {
    if (text.length !== 0) {
      addTodo(text);
    }
  };
  const label = title;

  return (
    <header className="header">
      <h1>{label}</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

export default Header;
