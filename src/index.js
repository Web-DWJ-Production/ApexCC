import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './js/app.js';

//import ReactDOM from 'react-dom';
//ReactDOM.render(<App />, document.getElementById('app'));

const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
