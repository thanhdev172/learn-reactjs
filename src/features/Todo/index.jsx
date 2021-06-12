import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "../Todo/components/TodoList";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
      </Switch>
    </div>
  );
}

export default TodoFeature;
