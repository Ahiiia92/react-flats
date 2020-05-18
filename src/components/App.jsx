import React, { Component } from 'react';
import FlatList from './Flat_List';
// import SimpleMap from './Google_Map_React';

import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flats: flats };
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
