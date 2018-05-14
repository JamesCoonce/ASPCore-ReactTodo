import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodos, createTodo, deleteTodo } from '../../services/todoService';
import TodoItem from './TodoItem';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { getAllTodos } from './todoReducer';

export class TodoList extends Component {
    constructor() {
        super();

    }

    componentDidMount() {
        this.props.getAllTodos();
    }
    render() {
        const { todos, match, loading, todoList } = this.props;
        console.log(this.props);
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
                                {todoList.todos.map((todo) =>
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

const mapStateToProps = (state, ownProps) => ({
    todos: [],
    todoList: state.todoReducer
});

const mapDispatchToProps = dispatch => ({
    getAllTodos: () => dispatch(getAllTodos)
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);