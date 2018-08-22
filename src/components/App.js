import React, { Component } from 'react';
import {handleInitialData} from '../actions/shared'


class App extends Component {

  componentDidMount() {
    console.log('mount');
    handleInitialData();
  }

  render() {
    return (
      <div>
        Starter code.
      </div>
    );
  }
}

export default App;
