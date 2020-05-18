import React, { Component } from 'react';
import Flat from './Flat.js';

class FlatList extends Component {
  // renderList = () => {
  //   return this.props.flats.map((flat) => {
  //     <Flat
  //     name={flat.name}
  //     key={flat.name}
  //     imageUrl={flat.imageUrl}
  //     price={flat.price}
  //     priceCurrency={flat.priceCurrency}
  //     lat={flat.lat}
  //     lng={flat.lng}
  //     />
  //   });
  // }

  render () {
    return (
    <div className="flat-list">
      <Flat />
    </div>
      );
  }
}

export default FlatList;
