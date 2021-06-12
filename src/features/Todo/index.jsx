import React from "react";
import TodoList from "../Todo/components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    { id: 1, name: "run" },
    { id: 2, name: "eat" },
    { id: 3, name: "sleep" },
  ];
  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
