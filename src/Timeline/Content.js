import React, { Component } from 'react';
import ActivityItem from './ActivityItem'
class Content extends Component {
  render() {
    // const {activities} = this.props; // ES6 destructuring
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
      <div className="content">
        <div className="line"></div>

      {/*Timeline item*/}
      {activities.map((activity) => (
          <ActivityItem activity={activity} />
      ))}

    </div>
    );
  }
}

export default Content;
