import React, { Component } from 'react';
import { loadTodos, createTodo, deleteTodo } from '../../services/todoService';
import TodoItem from './TodoItem';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';


class TodoList extends Component {
    constructor() {
        super();
        this.state = { todos: [], loading: true, title: "", description: "", finished: false };
    }

    componentDidMount() {
        loadTodos().then(todos => this.setState({ todos, loading: false }));
    }
    render() {
        let loading = this.state.loading;
       
        return (
            <div>
                {
                    loading && (
                        <p><em>Loading...</em></p>
                    )}
                {
                    !loading && (
                        <div>
                            <h1>All Todos</h1>
                            <a className="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true" href={'/todos/create'}>Create</a>
                            <ListGroup>
                                {this.state.todos.map((todo) =>
                                    <TodoItem key={todo.id} todo={todo} />
                                )
                                }
                            </ListGroup>

                        </div>
                    )
                }
            </div>
        )
    }
}

export default TodoList;