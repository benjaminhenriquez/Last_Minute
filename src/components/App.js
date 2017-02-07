import React, { Component } from 'react';

import '../style/App.css';
import SearchBar from '../containers/search_bar'
import Results from '../containers/results'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <SearchBar />
          <Results />
      </div>
    );
  }
}

export default App;
