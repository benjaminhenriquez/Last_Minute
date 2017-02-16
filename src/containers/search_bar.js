import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import ebayCall from '../actions/ebay_call'
import '../style/App.css';

class SearchBar extends Component {
  render() {
    return(
      <div>
      <form className="search_result_page" onSubmit={this.onFormSubmit.bind(this)}>
        <div className="input-field">
          <input
            id="search_2" type="search"
            placeholder="Search for Deals"
            onChange={event => this.onInputChange(event.target.value)}/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
        </div>
      </form>
      </div>
  )
}

onInputChange(event){
  _.debounce(this.props.ebayCall(event), 300);
  }

  onFormSubmit(event){
    event.preventDefault();
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall }, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
