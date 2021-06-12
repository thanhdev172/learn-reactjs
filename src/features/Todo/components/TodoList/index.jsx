import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.object.isRequired,
};

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
