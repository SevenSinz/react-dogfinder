import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './Nav.css';

export default class Nav extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "blue"
    };

    const dogs = this.props.dogs.map( d => <NavLink exact to={`/dogs/${d}`}
    activeStyle={activeStyle}>{d}</NavLink>)

    return (
        <nav>
          <NavLink exact to="/dogs"
            activeStyle={activeStyle}>Home</NavLink>
          { dogs }
        </nav>
    );
  }
}


