import React from 'react';
import { increment, decrement } from './counterActions';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>Counter value: {this.props.counter}</p>
        <button onClick={this.props.decrementCounter}>-</button>
        <button onClick={this.props.incrementCounter}>+</button>
      </div>
    )
  }
}

const mapStateToProps = currentState => {
  return {
    counter: currentState.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);