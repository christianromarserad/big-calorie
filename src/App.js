import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCountActionCreator } from './store/CounterReducer';
import MealPlanPage from './components/MealPlan/MealPlanPage';

function App(props) {
  return (
    <div>
      <MealPlanPage />
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
