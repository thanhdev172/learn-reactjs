import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import TodoList from "../../../../features/Todo/components/TodoList";
import queryString from "query-string";
import { match } from "minimatch";
import categoriesApi from "../../../../api/categoriesApi";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    { id: 1, name: "run", status: "new" },
    { id: 2, name: "eat", status: "complete" },
    { id: 3, name: "sleep", status: "new" },
  ];
  const location = useLocation();
  const history = useHistory();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const search = location.search;
    const params = queryString.parse(search);

    return params.status || "all";
  });

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "complete" ? "new" : "complete",
    };

    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredStatus("all");
    const queryParams = { status: "all" };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredStatus("new");
    const queryParams = { status: "new" };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleteClick = () => {
    // setFilteredStatus("complete");
    const queryParams = { status: "complete" };

    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  useEffect(() => {
    const params = queryString.parse(location.search);

    setFilteredStatus(params.status || "all");
  }, [location.search]);

  useEffect(() => {
    const fetchCategories = async () => {
      const params = {
        _limit: 5,
      };
      const categories = await categoriesApi.getAll(params);
      console.log(categories);
    };

    fetchCategories();
  }, []);

  const filterTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || todo.status === filteredStatus
  );
  return (
    <div>
      <TodoList todoList={filterTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
      </div>
      <div>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
      <div>
        <button onClick={handleShowCompleteClick}>Show Complete</button>
      </div>
    </div>
  );
}

export default ListPage;
