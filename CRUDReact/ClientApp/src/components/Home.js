import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
      <Jumbotron>
        <h1 className="display-3">My Todos</h1>
        <p className="lead">This is a simple todo app using ASP.NET Core and React</p>
        <hr className="my-2" />
        <p>Features include a REST API. Entity Framework and an HTTP Service for retrieving your Todos</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}
