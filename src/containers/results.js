import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {

    if(this.props.results.length > 0){
          console.log(this.props.results[0])
    return (
      <div>
        <img src={this.props.results.item[0].pictureURLLarge[0]} />
      </div>
    );
  }
  else{
    return(
      <div> No Results Found! </div>
    );
  }
}
}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Results);
