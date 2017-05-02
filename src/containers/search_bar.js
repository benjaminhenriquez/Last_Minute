import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import ebayCall from '../actions/ebay_call'
import clearResults from '../actions/clear_results'
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
      <header>
      <nav>
      <form >
        <div className="col span-2-of-4">
          <input
            className="search_box"
            id="results_search"
            type="search"
            value={this.state.query}
            onChange={event => this.onUpdateQuery(event.target.value)}/>
        </div>
        <div className="col span-1-of-4 form_box">
          <label>Max Price:</label>
          <input
            className="maxPrice"
            type="number"
            min="1"
            max="100"
            value={this.state.price}
            onChange={event => this.onUpdatePrice(event.target.value)}>
          </input>
        </div>
        <div className="col span-1-of-4 form_box">
          <label>Time Limit:</label>
          <input
            className="maxTime"
            type="number"
            min="1"
            max="60"
            value={this.state.time}
            onChange={event => this.onUpdateTime(event.target.value)}>
          </input>
        </div>
      </form>
      </nav>
      </header>
  )
}

  onUpdateTime(event){
    this.setState({time: event})
    this.props.clearResults();
    _.debounce(this.props.ebayCall(this.state.query, event, this.state.price),300)
  }

  onUpdatePrice(event){
    this.setState({price: event})
    this.props.clearResults();
    _.debounce(this.props.ebayCall(this.state.query, this.state.time, event),300)

  }

  onUpdateQuery(event){
    this.setState({query: event})
    this.props.clearResults();
    _.debounce(this.props.ebayCall(event, this.state.time, this.state.price),800)
  }

}

function mapStateToProps({ results, query }){
  return { results, query };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ebayCall, queryTerm, clearResults}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


    // <label>Max Price:</label>

    // <label>Time Limit:</label>
