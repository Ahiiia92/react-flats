import React, { Component } from 'react';
import Flat from './Flat.js';

class FlatList extends Component {
  renderList = () => {
    return <Flat
    name={this.props.flats[0].name}
    imageUrl={this.props.flats[0].imageUrl}
    price={this.props.flats[0].price}
    priceCurrency={this.props.flats[0].priceCurrency}
    lat={this.props.flats[0].lat}
    lng={this.props.flats[0].lng}
    />;
  }

  render () {
    return (
    <div className="flat-list">
      {this.renderList()}
    </div>
      );
  }
}

export default FlatList;

// this.props.flats.map((flat) => {
//       <Flat
//       name={flat.name}
//       imageUrl={flat.imageUrl}
//       price={flat.price}
//       priceCurrency={flat.priceCurrency}
//       lat={flat.lat}
//       lng={flat.lng}
//       />
//     });
