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
        <FlatList flats={this.state.flats} />
      </div>
    );
  }
}

export default App;
