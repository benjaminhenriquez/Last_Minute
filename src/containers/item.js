import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  render() {

    debugger

    return (
      <div >
      <a href={this.props.results[this.props.id].viewItemURL[0]} target="_blank">
        <div  >
            <img src={this.props.results[this.props.id].galleryURL[0]} />
                <div >
                  <h5>{this.props.results[this.props.id].title[0]}</h5>
                  <p>${this.props.results[this.props.id].sellingStatus[0].currentPrice[0].__value__}</p><p>{this.props.results[this.props.id].location[0]}</p>
      </div>
      </div>
   </a>
      </div>
    );
  }
}

function mapStateToProps({ results }){
  return { results };
}

export default connect(mapStateToProps)(Item);
