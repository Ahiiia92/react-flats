import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './Flat_List';
import flats from '../../data/flats';
import Marker from './Marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
      isCardSelected: true
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (id) => {
    this.setState({ selectedFlat: flats[id] });
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
            bootstrapURLKeys={{ key: 'AIzaSyAjN0k3yE0g0YKLcsS2Xb_BAGFF8s3PI1Q' }}
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
