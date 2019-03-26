import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 0,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina hates Tubby."
        ]
      }
    ]
  }

  render() {
    const dogs = this.props.dogs.map(d => d.name);

    return (
      <div className="App">
       <BrowserRouter>
       <Nav dogs={ dogs } />
        <Switch>
          <Route path="/dogs" exact render={() => <Home />} />
          <Route path="/dogs/:name" exact render={() => <Dog />} />
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}


