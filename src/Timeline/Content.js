import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="line" />
        <div className="item">
          <div className="avatar">
            <img alt="doug" src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
          </div>

          <span className="time">An hour ago</span>
          <p>Ate lunch</p>
        </div>
      </div>
    );
  }
}

export default Content;
