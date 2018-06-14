import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeProductFromBasket } from '../actions/basketActions';
import BasketProductList from './BasketProductList';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.removeProductFromBasket = this.removeProductFromBasket.bind(this);
  }

  removeProductFromBasket(product) {
    this.props.removeProductFromBasket(product);
  }

  render() {
    return (
      <div className="basket">
        <h1>Basket. Money: {this.props.basket.price} RUB</h1>
        <BasketProductList products={this.props.basket.products} removeProduct={this.removeProductFromBasket} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basket,
  };
}

Basket.propTypes = {
  removeProductFromBasket: PropTypes.func.isRequired,
  basket: PropTypes.shape({ price: PropTypes.number, products: PropTypes.array }).isRequired,
};

export default connect(mapStateToProps, { removeProductFromBasket })(Basket);
