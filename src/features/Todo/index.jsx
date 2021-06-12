import React, { useState } from "react";
import TodoList from "../Todo/components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, name: "run", status: "new" },
    { id: 2, name: "eat", status: "complete" },
    { id: 3, name: "sleep", status: "new" },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "complete" ? "new" : "complete",
    };

    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };
  return (
    <div>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
