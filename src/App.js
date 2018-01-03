import React, { Component } from 'react';
import Welcome from './Welcome';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      title: "Hola mundo desde Estado"
    }
  }
  render() {
    const names = ["Pedro","Juan","German"];
    return (
      <div>
        {names.map(name =>
        <Welcome key = {name} name = {name} />
      )}
      <h1>{this.state.title}</h1>
      <button onClick={this.changeTitle.bind(this)} >Cambie el titulo </button>
      </div>  
      
    );
  }
  changeTitle(){
    this.setState({
      title: "Nuevo título"
    });
  }
}

export default App;
