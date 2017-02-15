import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import ebayCall from '../actions/ebay_call'
import '../style/App.css';


class Home extends Component {

  constructor(props){
  super(props);

  this.state = { term: ''};
}

  render() {
    return (
      <div id="shoe">
      <img id="image" src={require('../../public/images/clock.jpg')}/>
      <h1><span>Last Minute</span></h1>

          <form  onSubmit={this.onFormSubmit.bind(this)}><span>
            <div className="input-field">
              <input
                id="search" type="search"
                placeholder="Search for Deals"
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)} />


              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              <input className="button" type="submit" value="Search" alt="Submit"/>
            </div>
          </span></form>

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

// onChange={event => this.onInputChange(event.target.value)}
