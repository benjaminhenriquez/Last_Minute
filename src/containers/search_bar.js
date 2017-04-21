import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import ebayCall from '../actions/ebay_call'

class SearchBar extends Component {

  render() {
    return(
      <div>
      <nav>
      <form  onSubmit={event => this.onFormSubmit(event)}>
          <input
            className="search_box"
            type="search"
            placeholder="Search..."
            onChange={event => this.onInputChange(event.target.value)}/>
          <input
            className="maxPrice"
            type="number"
            min="1"
            max="100"
            placeholder="10"
            onChange={event => this.props.onUpdatePrice(event.target.value)}>
          </input>
          <input
            className="maxTime"
            type="number"
            min="1"
            max="60"
            placeholder="10"
            onChange={event => this.props.onUpdateTime(event.target.value)}>
          </input>
          <input
            className="hidden"
            type="submit"
            ></input>
      </form>
      </nav>
      </div>
  )
}

onInputChange(event){
  let time = parseInt(this.props.time)
  let price = parseInt(this.props.price)
  this.props.onUpdateQuery(event)
  _.debounce(this.props.ebayCall(event, time, price), 300);

  }

  onFormSubmit(event){
    event.preventDefault();
    let time = parseInt(this.props.time)
    let price = parseInt(this.props.price)
    let query = this.props.query
    this.props.ebayCall(query, time, price)
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall }, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
