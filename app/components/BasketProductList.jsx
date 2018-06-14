import React, { Component } from 'react';
import BasketProduct from './BasketProduct';

class BasketProductList extends Component {
  render() {
    return (
      <div className="basket-product-list">
        {this.props.products.map(product => (<BasketProduct key={product.id} name={product.name} price={product.price} count={product.count} removeProduct={this.props.removeProduct.bind(this, product)}/>))}
      </div>
    );
  }
}

export default BasketProductList;
