import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {now: Date.now()}
  }

  render() {

    let endTime = (new Date(this.props.results[this.props.id].listingInfo[0].endTime[0]) - new Date()) / 1000
    let timeId = $(`#time${this.props.id}`);
    let now = this.state.now;

    return (
      <div >
        <p className="item_name">{this.props.results[this.props.id].title[0]}</p>
        <p>${this.toFixed(this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__,2)}</p><p>{this.props.results[this.props.id].location[0]}</p>
        <a href={this.props.results[this.props.id].viewItemURL[0]} target="_blank" alt="Ebay.com" title="click here to view Ebay listing">
        <img className="itemImage" src={this.props.results[this.props.id].pictureURLLarge[0]} />
        </a>

      </div>
    );
  }



toFixed(value, precision) {
    var precision = precision || 0,
        power = Math.pow(10, precision),
        absValue = Math.abs(Math.round(value * power)),
        result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

    if (precision > 0) {
        var fraction = String(absValue % power),
            padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
        result += '.' + padding + fraction;
    }

    return result;
}

startTimer(duration,timeId,now) {
  let start = now, diff, hours, minutes, seconds
  function timer() {
    diff = duration - (((now - start) / 1000) | 0)

    minutes = ((diff % 3600) / 60) | 0
    seconds = (diff % 60) | 0
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    return `${minutes} : ${seconds} remaining!`

    }

    return timer();
  }

  componentDidMount() {
  this.setState({ now: Date.now() });
}

}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Item);


  // <p>{this.startTimer(endTime, timeId, now)}</p>
