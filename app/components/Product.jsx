import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <span>{this.props.name}</span>
        <span> {this.props.price} RUB</span>
        <button onClick={this.props.addProduct}>Add</button>
      </div>
    );
  }
}

export default Product;
