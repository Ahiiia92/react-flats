import React, { Component } from 'react';
import Flat from './Flat';

class FlatList extends Component {
  renderList = () => {
    this.props.flats.map((flat) => {
      console.log(flat.name);
      return "coucou";
    });
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

// return <Flat
//     name={this.props.flats[0].name}
//     imageUrl={this.props.flats[0].imageUrl}
//     price={this.props.flats[0].price}
//     priceCurrency={this.props.flats[0].priceCurrency}
//     lat={this.props.flats[0].lat}
//     lng={this.props.flats[0].lng}
//     />;


// <Flat
//           name={flat.name}
//           imageUrl={flat.imageUrl}
//           price={flat.price}
//           priceCurrency={flat.priceCurrency}
//           lat={flat.lat}
//           lng={flat.lng}
//           />
