import React, { Component } from 'react';
import '../components/timeline.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false}
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true});
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false})
  }

  render() {
    const {refreshing} = this.state;
    return(
      <div className='notificationsFrame'>
        <div className='panel'>
          <Header title='Github activity' />
          {/*Refreshing is the component's state*/}
          <Content
            onComponentRefresh={this.onComponentRefresh.bind(this)}
            requestRefresh={refreshing}
            // fetchData={fetchEvents}
          />
          {/*A containter for styling*/}
          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh" />
              Refresh
            </button>
            {/*If you click the button, you will see see the state of the Container to be refreshed.*/}
            {/*Mark the changes in timestamp under the name when you click the button.*/}

          </Footer>
        </div>
      </div>
    );

  }

}
export default Container;
