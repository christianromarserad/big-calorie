import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCountActionCreator } from './store/CounterReducer';

function App(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.incrementCountActionCreator}>Click</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementCountActionCreator: incrementCountActionCreator
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
