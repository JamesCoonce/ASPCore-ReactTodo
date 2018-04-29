import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createTodo } from '../../services/todoService';
import history from '../../services/history';

class TodoForm extends Component {
    constructor(props){
        super(props)

        this.state = {todo: {title: "", description: "", finished: false}}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });
        //this.setState({post: {[name]: value}})

    }

    handleSubmit(event) {
        //alert(this.state.title + " " + this.state.body);
        var todo = {title: this.state.title, description: this.state.description, finished: this.state.finished };
        //alert(post.title + " " + post.userId);
        createTodo(todo).then(res => console.log(res));
        event.preventDefault();
        history.replace('/todos');
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input type="text" name="title" id="title" placeholder="Title" onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="body" sm={2}>Body</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" id="description" placeholder="Body" onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default TodoForm;