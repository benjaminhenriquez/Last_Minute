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
      query: this.props.query
    }
  }

  render() {
    return(
      <div>
      <nav>
      <form >
          <input
            className="search_box"
            type="search"
            value={this.state.query}
            onChange={event => this.onUpdateQuery(event.target.value)}/>
          <input
            className="maxPrice"
            type="number"
            min="1"
            max="100"
            value={this.state.price}
            onChange={event => this.onUpdatePrice(event.target.value)}>
          </input>
          <input
            className="maxTime"
            type="number"
            min="1"
            max="60"
            value={this.state.time}
            onChange={event => this.onUpdateTime(event.target.value)}>
          </input>
      </form>
      </nav>
      </div>
  )
}

  onUpdateTime(event){
    this.setState({time: event})
    _.debounce(this.props.ebayCall(this.state.query, event, this.state.price), 300)
  }

  onUpdatePrice(event){
    this.setState({price: event})
    _.debounce(this.props.ebayCall(this.state.query, this.state.time, event), 300)

  }

  onUpdateQuery(event){
    this.setState({query: event})
    _.debounce(this.props.ebayCall(event, this.state.time, this.state.price), 300)
  }



}

function mapStateToProps({ results, query }){
  return { results, query };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall, queryTerm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
