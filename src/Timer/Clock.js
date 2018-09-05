import React from 'react';
import './Clock.css';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getTime();
  }

  setTimer(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock(){
    const currentTime = new Date();
    this.setState({currentTime: currentTime}, this.setTimer);
    // this.setState(this.getTime, this.setTimer);
  }

  getTime(){
    const currentTime = new Date();
    return{
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
    }
  }
  // When your clock is going to be unmounted, we'll want to clear
  // the timeout we create in the setTimer() function on the component.
  componentWillUnmount() {
    if(this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const {hours, minutes, seconds, ampm} = this.state;
    return (
      <div className="clock">
        {
          hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        } {ampm}
      </div>
    );
  }

}
export default Clock;

Clock.propTypes = {
  basicObject: PropTypes.object,
  numbers: PropTypes.objectOf(PropTypes.numbers),
  // messages: PropTypes.instanceOf(Message),
  contactList: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
}