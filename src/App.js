import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Router from 'react-router';
import axios from 'axios';

class App extends Component {
  //https://learn.dcollege.net/learn/api/public/v1/courses
  componentWillMount() {
    console.log("This will mount");
    // fetch('https://learn.dcollege.net/learn/api/public/v1/courses', {
    //   method: 'GET',
    //   // headers: {
    //   //   'Accept': 'application/json',
    //   //   'Content-Type': 'application/json',
    //   // },
    //   // // body: JSON.stringify({
    //   // //   firstParam: 'yourValue',
    //   // //   secondParam: 'yourOtherValue',
    //   // // })
    // })
  }

  componentDidMount() {
    console.log("This did mount");
  }

  componentWillUnmount() {
    console.log("This will unmount");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcomddde to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
