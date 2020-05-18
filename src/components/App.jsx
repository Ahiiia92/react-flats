import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './Flat_List';
import flats from '../../data/flats';
import Marker from './Marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render () {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
         />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: ENV['GOOGLE_MAPS_KEY'] }}
            defaultCenter={this.center()}
            defaultZoom={11} >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
