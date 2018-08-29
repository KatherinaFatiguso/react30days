import React, { Component } from 'react';
import '../components/timeline.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="Timeline" />
            {/*Passing title as a prop for attribute on <Header /> */}
            <Content />
          </div>
        </div>
    );
  }
}

export default App;
