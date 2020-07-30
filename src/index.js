import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './component/App';
import rootReducer from './component/reducers/index';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger  = function({ dispatch,getState }) {
//     return function (next) {
//         return function (action) {
//             //middleware
//             console.log('ACTION_TYPE=',action.type);
//             next(action);
//         }
//     }
// }
const logger = ({ dispatch,getState }) => (next) => (action) => {
    console.log('ACTION_TYPE=',action.type);
    next(action);
}
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('store',store);

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies:[{name: 'Superman'}]
// }); 

ReactDOM.render(<App store={store} />,document.getElementById('root'));
