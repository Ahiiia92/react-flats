import React, { Component } from 'react';
import FlatList from './Flat_List';

import flats from '../../data/flats.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flats: flats }
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
