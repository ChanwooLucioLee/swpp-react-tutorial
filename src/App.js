import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'

import './App.css'
import NewTodo from './containers/TodoList/NewTodo/NewTodo'
import TodoList from './containers/TodoList/TodoList'
import history from './history'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route
            path="/todos"
            exact
            render={() => <TodoList title={'My TODOs'} />}
          />
          <Route path="/new-todo" exact component={NewTodo} />
          <Redirect exact from="/" to="todos" />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
