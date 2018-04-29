import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { getTodo } from '../../services/todoService';

class Todo extends Component {
    constructor(props){
        super(props);

        this.state = { todos: null , loading: true, title: "", description: "", finished: false };
    }

    componentDidMount(){
        getTodo(this.props.match.params.id).then(todo => this.setState({todo, loading: false}));
    }
    render(){
        let loading = this.state.loading;
        
        return (
            <div>
                {
                    loading && (
                        <p><em>Loading...</em></p>
                    )}
                {
                    !loading && (
                    <Jumbotron>
                        <h1>Todo number #{this.state.todo.id}</h1>
                        <h2>{this.state.todo.title}</h2>
                        <p>{this.state.todo.description}</p>
                    </Jumbotron>
                    )
                }
            </div>
        )
    }
}

export default Todo;