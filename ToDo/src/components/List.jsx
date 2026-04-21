import React, { useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Counter from "./Counter";

const List = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (text) => {
    const newItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <div className="todo-container">
      <h1>Список дел</h1>

      <Form onAdd={handleAdd} />

      {items.length === 0 ? (
        <p>Нет дел</p>
      ) : (
        <ul className="todo-list">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}

      <Counter items={items} />
    </div>
  );
};

export default List;