import React, { Component } from 'react';
import './App.css';
import { HelloWorld } from './components/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React+Pug+TDD+Styled-components</h1>
        </header>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
