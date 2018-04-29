import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import { Home } from './components/Home';
import Todo from './components/todo/Todo';
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/todos" render={(props) => <TodoList {...props} />} />
                <Route exact path="/todos/create" render={(props) => <TodoForm {...props} />} />
                <Route path="/todos/:id" render={(props) => <Todo {...props} />} />
            </Switch>
        </Layout>
    );
  }
}
