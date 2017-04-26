import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './home_page'
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
    debugger
    if(this.props.results.length===0 && this.props.query === ""){
      return(
        <Home/>
      )
    }
    else{
      return(
        <Results/>
      )
    }
  }

}

function mapStateToProps({ results, query }){
  return { results, query };
}

export default connect(mapStateToProps)(App)
