import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/list'



class App extends Component {
  render() {
    return (
      <div className="App">
       <AddTodo />
       <List />
      </div>
    );
  }
}

export default App;
