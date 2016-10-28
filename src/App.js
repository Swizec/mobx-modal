import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Store {
    @observable value = 1;
}

@observer
class App extends Component {
    store = new Store();

    componentDidMount() {
        window.store = this.store;
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            {this.store.value}
        </p>
      </div>
    );
  }
}

export default App;
