import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import mobx, { observable, action } from 'mobx';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import Modal, { closeStyle } from 'simple-react-modal';

mobx.useStrict(true);

class Store {
    @observable modal = {
        show: false,
        body: null
    }

    @action showModal(body) {
        this.modal.show = true;
        this.modal.body = body;
    }

    @action closeModal() {
        this.modal.show = false;
        this.modal.body = null;
    }
}

@observer
class App extends Component {
    store = new Store();

    componentDidMount() {
        window.store = this.store;
    }

    openModal1() {
        this.store.showModal(<strong>Strong Hello</strong>);
    }

    openModal2() {
        this.store.showModal(<App />);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <DevTools />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <button onClick={this.openModal1.bind(this)}>
                        Open a Modal
                    </button>
                    <button onClick={this.openModal2.bind(this)}>
                        Start Modal Inception
                    </button>
                </p>

                <Modal show={this.store.modal.show}
                       closeOnOuterClick={true}
                       onClose={this.store.closeModal.bind(this.store)}>

                    <a onClick={this.store.closeModal.bind(this.store)}
                       style={closeStyle}>X</a>

                    {this.store.modal.body}
                </Modal>
            </div>
        );
    }
}

export default App;
