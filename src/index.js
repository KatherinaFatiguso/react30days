import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Timeline/Container';
import Timer from './Timer/Clock';

export const load = () => {
  ReactDOM.render(<Container />, document.getElementById('demo'));   /* This renders page to id="demo" in index.html */
  ReactDOM.render(<Timer />, document.getElementById('demo2'));

};

load();