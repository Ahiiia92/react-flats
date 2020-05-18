import React, { Component } from 'react';
import FlatList from './Flat_List.js';

import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    }
  }

  render () {
    return (
      <div>
        Hello, Marou !
        <div className="right-side">
        </div>
        <div className="left-side">
          <FlatList flats={this.state.flats} />
        </div>
      </div>
    );
  }
}

export default App;
