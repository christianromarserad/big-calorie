import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCountActionCreator } from './store/CounterReducer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlanPage from './components/MealPlan/MealPlanPage';
import MealPlanEditPage from './components/MealPlan/MealPlanEditPage';
import UserSideBar from './components/User/UserSideBar';

function App(props) {
  return (
    <div class="flex bg-gray-200 h-screen">
      <div>
        <UserSideBar />
      </div>
      <div class="flex-1">
        <Router>
          <Switch>
            <Route path="/edit/:day/:index" component={MealPlanEditPage} />
            <Route path="/" component={MealPlanPage} />
          </Switch>
        </Router>
      </div>
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
