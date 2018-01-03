import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import registerServiceWorker from './registerServiceWorker';

//create redux store
const store = createStore(counterReducer);

ReactDOM.render(
<Provider store={store}>
  <Counter />
</Provider>, document.getElementById('root'));
registerServiceWorker();
