import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './item'
import SearchBar from './search_bar'


class Results extends Component {

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
        <SearchBar
          onUpdateTime={this.onUpdateTime.bind(this)}
          onUpdatePrice={this.onUpdatePrice.bind(this)}
          onUpdateQuery={this.onUpdateQuery.bind(this)}
          time={this.state.time}
          price={this.state.price}
          query={this.state.query}
        />
        {this.createCarousel()}
      </div>
  )

}

createCarousel(){
  //this class method creates the table with each of the BoardPiece containers
  let list = [];
  let array = ["#one!","#two!","#three!","#four!","#five!"]

  for(let id = 0; id< this.props.results.length; id++){

      list.push(< Item  className="item" id={id} href={array[id+1]}/>)
    }


  return list;
}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Results);

// <div className="carousel carousel-slider center" data-indicators="true">
// <div className="carousel-fixed-item center">

// <a className="btn waves-effect white grey-text darken-text-2">button</a>
