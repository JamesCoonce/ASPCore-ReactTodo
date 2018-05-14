import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodos, createTodo, deleteTodo } from '../../services/todoService';
import TodoItem from './TodoItem';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { getAllTodos } from './todoReducer';

class TodoList extends Component {
    constructor() {
        super();
        this.state = { todos: [], loading: true, title: "", description: "", finished: false };
    }

    componentDidMount() {
        this.props.getAllTodos();
    }
    render() {
        let loading = this.state.loading;
        const { todoList, match } = this.props;
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
                                {todoList.map((todo) =>
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

const mapStateToProps = ({todo}) => ({
    todoList: todo.todos
});

const mapDispatchToProps = {
    getAllTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);