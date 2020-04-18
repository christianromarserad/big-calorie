import React from 'react';
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import MealPlanPage from './components/MealPlan/MealPlanPage';
import UserSideBar from './components/User/UserSideBar';

function App(props) {
  return (
    <div class="flex bg-gray-200 h-screen">
      <div>
        <UserSideBar />
      </div>
      <div class="flex-1">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" component={MealPlanPage} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
