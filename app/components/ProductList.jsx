import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        {this.props.products.map(product => (<Product key={product.id} name={product.name} price={product.price} addProduct={this.props.addProduct.bind(this, product)}/>))}
      </div>
    );
  }
}

export default ProductList;
