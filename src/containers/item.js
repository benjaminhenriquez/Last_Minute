import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  render() {

    debugger

    return (


        <a className="carousel-item" href={this.props.results[this.props.id].viewItemURL[0]} target="_blank">
            <img className="ItemImage" src={this.props.results[this.props.id].pictureURLLarge[0]} />
               </a>



    );
  }

doSomething(){
  event.preventDefault()
  alert(this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__)

}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Item);

//           <div >
//             <h5>{this.props.results[this.props.id].title[0]}</h5>
//             <p>${this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__}</p><p>{this.props.results[this.props.id].location[0]}</p>
//
// </div>
