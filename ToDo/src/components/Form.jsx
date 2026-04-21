import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите новое дело"
        className="todo-input"
      />
      <button type="submit" className="a">
        Добавить
      </button>
    </form>
  );
};

export default Form;