import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import ebayCall from '../actions/ebay_call'
import queryTerm from '../actions/query_term'

class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      time: "10",
      price: "10",
      query: ""
    }

  }

  onUpdateTime(event){
    this.setState({time: event})
  }

  onUpdatePrice(event){
    this.setState({price: event})
  }

  onUpdateQuery(event){
    this.setState({query: event})
  }


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
            onChange={event => this.onUpdatePrice(event.target.value)}>
          </input>
          <input
            className="maxTime"
            type="number"
            min="1"
            max="60"
            placeholder="10"
            onChange={event => this.onUpdateTime(event.target.value)}>
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
  let time = parseInt(this.state.time)
  let price = parseInt(this.state.price)
  this.onUpdateQuery(event)
  _.debounce(this.props.ebayCall(event, time, price), 300);

  }

  onFormSubmit(event){
    event.preventDefault();
    let time = parseInt(this.state.time)
    let price = parseInt(this.state.price)
    let query = this.props.query
    this.props.ebayCall(query, time, price)
    this.props.queryTerm(query)
  }

}

function mapStateToProps({ results }){
  return { results };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall, queryTerm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
