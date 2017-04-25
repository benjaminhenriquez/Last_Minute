import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './item'
import SearchBar from './search_bar'


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
  if(this.props.results.length > 0){
  let list = [];

  for(let id = 0; id< this.props.results.length; id++){

      list.push(< Item  className="item" id={id} />)
    }


  return list;}
  else if(this.props.results.length === 0){
    return <div>No results Found</div>
  }
}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Results);

// <div className="carousel carousel-slider center" data-indicators="true">
// <div className="carousel-fixed-item center">

// <a className="btn waves-effect white grey-text darken-text-2">button</a>
