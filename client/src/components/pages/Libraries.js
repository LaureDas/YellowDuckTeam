import React, { Component } from "react";
import api from "../../api";

class Libraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libraries: []
    };
  }
  render() {
    return (
      <div className="Libraries">
        <h2>List of libraries</h2>
        {this.state.libraries.map(c => (
          <li key={c._id}>{c.name}</li>
        ))}
      </div>
    );
  }
  componentDidMount() {
    api
      .getLibraries()
      .then(libraries => {
        console.log(libraries);
        this.setState({
          libraries: libraries
        });
      })
      .catch(err => console.log(err));
  }
}

export default Libraries;
