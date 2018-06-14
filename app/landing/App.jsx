import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToBasket } from '../actions/basketActions';
import ProductList from './../components/ProductList';
import Basket from './../components/Basket';

const products = [
  {
    id: 1,
    name: 'flower',
    description: 'my flower',
    price: 50,
  },
  {
    id: 2,
    name: 'bagpack',
    description: 'my bagpack',
    price: 150,
  },
  {
    id: 3,
    name: 'T-short',
    description: 'my T-short',
    price: 200,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.addProductToBasket = this.addProductToBasket.bind(this);
  }

  addProductToBasket(product) {
    if (this.props.basketPrice >= product.price) {
      this.props.addProductToBasket(product);
    } else {
      alert('Not enought money to buy');
    }
  }

  render() {
    return (
      <div>
        <h1>Shop products</h1>
        <ProductList products={products} addProduct={this.addProductToBasket} />
        <Basket />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basketPrice: state.basket.price,
  };
}

App.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
  basketPrice: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, { addProductToBasket })(App);
