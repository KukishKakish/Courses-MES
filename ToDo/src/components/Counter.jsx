import React from "react";

const Counter = ({ items }) => {
  const total = items.length;
  const completed = items.filter((item) => item.completed).length;

  if (total === 0) return null;

  return (
    <div className="todo-counter">
      Всего дел: {total} | Выполнено: {completed}
    </div>
  );
};

export default Counter;