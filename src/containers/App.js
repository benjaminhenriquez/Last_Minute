import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style/App.css';

import SearchBar from './search_bar'
import Results from './results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        {this.renderPage()}
      </div>
    </div>
    );
  }

  renderPage(){
    if(this.props.results.length===0){
      return(
        <SearchBar/>
      )
    }
    else{
      return(
        <Results/>
      )
    }
  }

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(App)
