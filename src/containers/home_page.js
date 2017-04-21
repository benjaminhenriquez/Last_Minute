import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import ebayCall from '../actions/ebay_call'



class Home extends Component {

  constructor(props){
  super(props);
  this.state = { term: ''};
}

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
                placeholder="Find deals expiring soon"
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)} />
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
  this.props.ebayCall(this.state.term);
}

  onInputChange(event){
  this.setState({ term: event.target.value});
}

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall }, dispatch)
}

export default connect(null,mapDispatchToProps)(Home);
