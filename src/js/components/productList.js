import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";

const mapStateToProps = state => ({
  products: state.product.items,
  loading: state.product.loading,
  errors: state.product.errors
});

class productList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;
    if (error) {
      <div> Error! {error.message}</div>;
    }
    if (loading) {
      <div> loading....</div>;
    }

    return (
      <ul>
        {products.map(product => (
          <li key={product.id}> {product.name}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(productList);
