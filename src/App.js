import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './Router';

//note: error occurs using current firebase version, rollback with npm i --save firebase@5.0.3
class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
