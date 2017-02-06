import React, { Component } from 'react';

import '../style/App.css';
import Results from '../containers/results'
import SearchBar from '../containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <Results />
          <SearchBar />
      </div>
    );
  }
}

export default App;
