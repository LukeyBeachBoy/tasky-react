import React from 'react';
import logo from '../logo.svg';
import TodoList from "../TodoList/TodoList";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tasky</p>
      </header>
        <section>
            <TodoList/>
        </section>
    </div>
  );
}

export default App;
