import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './item';
import SearchBar from './search_bar';


class Results extends Component {


  render() {

    return(
      <div>
        <SearchBar/>
        {this.createCarousel()}
      </div>
  )

}

createCarousel(){
  //this class method creates the table with each of the BoardPiece containers
  let list = [];

  for(let key = 0; key< this.props.results.length; key++){

      list.push(< Item  className="item" key={key}/>)
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
