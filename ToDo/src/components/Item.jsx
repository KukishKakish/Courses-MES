import React from "react";

const Item = ({ item, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${item.completed ? "completed" : ""}`}>
        {item.text}
      </span>
      <button onClick={() => onDelete(item.id)} className="delete-button">
        Удалить
      </button>
    </li>
  );
};

export default Item;