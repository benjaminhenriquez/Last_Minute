import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './item'

class Results extends Component {
  render() {

    if(this.props.results.length > 0){

    return (
      <table>
        <tbody>{this.createBoard()}</tbody>
      </table>
    );
  }

  else{
    return(
      <div> No Results Found! </div>
    );
  }
}

createBoard(){
  //this class method creates the table with each of the BoardPiece containers
  let list = [];

  for(let id = 0; id< this.props.results.length; id++){

      list.push(<Item id={id}/>)
    }


  return list;
}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Results);
