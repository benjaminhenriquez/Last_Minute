import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSearchTerm }  from '../actions/search_term';
import { ebayCall } from '../actions/ebay_call';

class SearchBar extends Component {
  render() {
          console.log(this.props.searchTerm)
    return (
      <div>

        <div className="container">
          <div className="jumbotron">
          <h1>L A S T M I N U T E</h1>
          <h3>1 Minute • 3 Choices • 1 Dollar</h3>
            <div className="lead">
            <form>
            <input
              placeholder="Search for Deals"
              className="form-control"
              onChange={event => this.onInputChange(event.target.value)}
              />
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onInputChange(event){
    this.props.updateSearchTerm(event);
    this.props.ebayCall(event);

  }

}

function mapStateToProps({ searchTerm }){
  return { searchTerm };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall , updateSearchTerm }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
