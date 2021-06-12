import "./App.css";
import TodoFeature from "./features/Todo";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import AlbumFeature from "./features/Album";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/todos" activeClassName="active-menu">
          {" "}
          Todos
        </NavLink>
      </div>
      <div>
        <NavLink to="/albums"> Albums</NavLink>
      </div>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
