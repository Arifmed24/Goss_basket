import React, { Component } from 'react';

class BasketProduct extends Component {
  render() {
    return (
      <div className="basket-product">
        <span>{this.props.name}</span>
        <span> {this.props.price} RUB</span>
        <span> X{this.props.count}</span>
        <button onClick={this.props.removeProduct}>Remove</button>
      </div>
    );
  }
}

export default BasketProduct;
