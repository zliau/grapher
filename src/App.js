import React, { Component } from 'react';
import Tabs from './tabs.js';
import Data from './data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        <header>
          <Tabs/>
        </header>

        <Data/>
      </div>
    );
  }
}

export default App;