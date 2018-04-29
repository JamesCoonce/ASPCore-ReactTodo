import React, { Component } from 'react';
import { loadTodos, createTodo, deleteTodo } from '../../services/todoService';
import { ListGroupItem } from 'reactstrap';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (event) => {
        deleteTodo(this.props.todo.id);
    }
    render() {
        return (
            <div>
                <ListGroupItem>
                <div class="row">
                    <div class="col">
                    {this.props.todo.title}
                    
                    <a className="btn btn-primary btn-lg active float-right" role="button" aria-pressed="true" href={'/todos/' + this.props.todo.id}>Show</a>
                    
                    <button className="btn btn-danger btn-lg active float-right" role="button" aria-pressed="true" onClick={this.handleDelete}>Delete</button>
                    </div>
                    </div>
                </ListGroupItem>
            </div>
        )
    }
}

export default TodoItem;