import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducerApp from './store/reducers'
const store = createStore(reducerApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));