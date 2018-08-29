import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Timeline/Container';

export const load = () => {
  ReactDOM.render(<Container />, document.getElementById('demo'));
  /* This renders page to id="demo" in index.html */
};

load();