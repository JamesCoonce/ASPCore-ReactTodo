import React, { Component } from 'react';
import TodoForm from './TodoForm';
import { Jumbotron, Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { getTodo, updateTodo } from '../../services/todoService';

class Todo extends Component {
    constructor(props){
        super(props);

        this.state = { todo: null, loading: true, title: "", description: "", finished: false, editMode: false };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.enableEditMode = this.enableEditMode.bind(this);
        this.makeCompleted = this.makeCompleted.bind(this);
    }

    componentDidMount(){
        getTodo(this.props.match.params.id).then(todo => this.setState({todo, loading: false}));
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    makeCompleted(event) {
        this.setState(prevState => ({
            finished: !prevState.finished
        }));
    }

    enableEditMode(event) {
        this.setState(prevState => ({
            editMode: !prevState.editMode,
            title: prevState.todo.title,
            description: prevState.todo.description,
            finished: prevState.todo.finished
        }));
    }

    handleSubmit(event) {
        //alert(this.state.title + " " + this.state.body);
        var todo = { id: this.state.todo.id , title: this.state.title, description: this.state.description, finished: this.state.finished };
        //alert(post.title + " " + post.userId);
        updateTodo(todo).then(res => console.log(res));
        event.preventDefault();
        getTodo(this.props.match.params.id).then(todo => this.setState({ todo, editMode: false }));

    }

    render(){
        let loading = this.state.loading;
        let editMode = this.state.editMode;
        return (
            <div>
                {
                    loading && (
                        <p><em>Loading...</em></p>
                    )}
                {
                    !loading && (
                        <div>
                            { editMode && (
                                <div>
                                    <h1>Edit Todo</h1>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup row>
                                            <Label for="title" sm={2}>Title</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="title" id="title" placeholder={this.state.todo.title} onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="body" sm={2}>Body</Label>
                                            <Col sm={10}>
                                                <Input type="textarea" name="description" id="description" placeholder={this.state.todo.description} onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="finished" sm={2}>Finished</Label>
                                            <Col sm={10}>
                                                <Input type="checkbox" name="finished" id="finished" onClick={this.makeCompleted} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup check row>
                                            <Col sm={{ size: 10, offset: 2 }}>
                                                <Button className="btn-success">Submit</Button>
                                                <Button className="btn-danger">Cancel</Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </div>
                            )}
                            { !editMode && (
                                <Jumbotron>
                                    <h1>Todo number #{this.state.todo.id}</h1>
                                    <h2>{this.state.todo.title}</h2>
                                    <p>{this.state.todo.description}</p>
                                    <input type="checkbox" readOnly className="form-check-input" id="exampleCheck1" checked={this.state.todo.finished} />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Finished</label>
                                    <Button onClick={this.enableEditMode}>Edit</Button>
                                </Jumbotron>
                            )}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Todo;