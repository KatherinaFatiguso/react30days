import React, { Component } from 'react';
import '../components/timeline.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: 'Ate lunch',
        user: {
          id: 1,
          name: 'Nate',
          avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
        },
        comments: [{from: 'Ari', text: 'Me too!'}]
      },
      {
        timestamp: new Date().getTime(),
        text: 'Woke up early for a beautiful run',
        user: {
          id: 2,
          name: 'Ari',
          avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
        },
        comments: [{from: 'Nate', text: 'I am so jealous'}]
      }
    ];

    return (
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="Timeline" />
            {/*Passing title as a prop for attribute on <Header /> */}
            <Content activities={activities} />
          </div>
        </div>
    );
  }
}

export default App;
