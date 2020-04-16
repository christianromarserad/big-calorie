import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCountActionCreator } from './store/CounterReducer';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import MealPlanPage from './components/MealPlan/MealPlanPage';
import MealPlanEditPage from './components/MealPlan/MealPlanEditPage';
import UserSideBar from './components/User/UserSideBar';

function App(props) {
  const location = useLocation();

  return (
    <div class="flex bg-gray-200 h-screen">
      <div>
        <UserSideBar />
      </div>
      <div class="flex-1">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={MealPlanPage} />
            <Route exact path="/edit/:day/:index" component={MealPlanEditPage} />
          </Switch>
        </AnimatePresence>
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
