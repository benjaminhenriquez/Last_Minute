import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './item'
import '../style/index.css'

class Results extends Component {
  render() {

    return(
      <div>
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
