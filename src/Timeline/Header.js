import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="panel">
        <div className="header">
          <div className="menuIcon">
            <div className="dashTop" />
            <div className="dashBottom" />
            <div className="circle" />
          </div>
          <span className="title">Timeline</span>

          <input
              type="text"
              className="searchInput"
              placeholder="Search ..." />

          <div className="fa fa-search searchIcon"></div>

        </div>
      </div>
    );
  }
}

export default Header;
