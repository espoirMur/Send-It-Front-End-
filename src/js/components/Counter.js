import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  //state = { count: 0 };

  increment = () => {
    //this.setState({count: this.state.count + 1});
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    //this.setState({count: this.state.count - 1 });
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapsPropsToState = state => {
  return { count: state.count };
};
export default connect(mapsPropsToState)(Counter);
