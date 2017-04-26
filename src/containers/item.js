import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 5 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
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

componentWillMount() {
  this.timer = setInterval(this.countDown, 1000);
  let date1 = new Date(this.props.results[this.props.id].listingInfo[0].endTime[0])
  let date2 = new Date()
  let thing = Math.abs(date1 - date2)/1000;
  console.log(thing)
  let timeLeftVar = this.secondsToTime(thing);
  console.log(timeLeftVar)
  this.setState({ seconds: thing });
  this.setState({ time: timeLeftVar });
}

componentWillUnmount(){
  let timeLeftVar = this.secondsToTime(0)
  this.setState({ seconds: 0 });
  this.setState({ time: timeLeftVar });
}

  render() {

    return(
      <div>
        <p className="item_name">{this.props.results[this.props.id].title[0]}</p>
        <p>${this.toFixed(this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__,2)}</p>
        <p>{this.props.results[this.props.id].location[0]}</p>
        <a href={this.props.results[this.props.id].viewItemURL[0]} target="_blank" alt="Ebay.com" title="click here to view Ebay listing">
            <img className="itemImage" src={this.props.results[this.props.id].pictureURLLarge[0]} />
        </a>
        <div>
          m: {this.state.time.m} s: {this.state.time.s}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Item);
