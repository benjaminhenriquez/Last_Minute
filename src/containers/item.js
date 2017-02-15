import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  render() {

    debugger

    return (
      <div className="carousel-item blue white-text" href={this.props.href}>
        <h6>{this.props.results[this.props.id].title[0]}</h6>
        <p className="white-text">${this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__}</p><p>{this.props.results[this.props.id].location[0]}</p>
        <a className="carousel-item" href={this.props.results[this.props.id].viewItemURL[0]} target="_blank">
        <img className="itemImage" src={this.props.results[this.props.id].pictureURLLarge[0]} />
        </a>
      </div>
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
