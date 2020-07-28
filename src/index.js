import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import movies from './component/reducers/index';


const store = createStore(movies);
console.log('store',store);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
