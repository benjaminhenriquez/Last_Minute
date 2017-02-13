import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import ebayCall from '../actions/ebay_call'
import '../style/App.css';


class SearchBar extends Component {
  render() {
    return (
      <div id="shoe">
      <img id="image" src={require('../../public/images/clock.jpg')}/>
      <h3><span>Last Minute</span></h3>

          <form ><span>
            <div className="input-field">
              <input
                id="search" type="search"
                placeholder="Search for Deals"
                onChange={event => this.onInputChange(event.target.value)}
                />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </span></form>

      </div>
    );
  }

  onInputChange(event){
    this.props.ebayCall(event);
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall }, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
