import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './component/App';
import movies from './component/reducers/index';


const store = createStore(movies);
console.log('store',store);

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// }); 

ReactDOM.render(<App store={store} />,document.getElementById('root'));
