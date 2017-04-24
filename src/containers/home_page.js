import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ebayCall from '../actions/ebay_call'
import queryTerm from '../actions/query_term';

class Home extends Component {

  render() {
    return (
      <div className="home_page" >

      <div className="row" id="hello">
      <div className="col span-1-of-2">
      <div className = "title_form">
      <h1><span>Last Minute</span></h1>
          <form onSubmit={this.onFormSubmit.bind(this)}>
              <input
                className="search_box"
                placeholder="Find deals expiring soon" />
              <button type="submit" value="Search" alt="Submit"><i className="ion-ios-search-strong icon-small"></i></button>
          </form>
          </div>
          </div>
          </div>
      </div>
    );
  }

  onFormSubmit(event){
    event.preventDefault();
  let query = event.target[0].value;

  this.props.ebayCall(query);
  this.props.queryTerm(query);
}


}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall, queryTerm }, dispatch)
}

export default connect(null,mapDispatchToProps)(Home);
