import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func,
};

TodoList.defaultPropsType = {
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };
  return (
    <div>
      <ul>
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}
            className={classnames({ complete: todo.status === "complete" })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
