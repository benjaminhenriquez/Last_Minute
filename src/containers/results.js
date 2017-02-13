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

  for(let id = 0; id< this.props.results.length; id++){

      list.push(< Item  id={id}/>)
    }


  return list;
}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Results);
