import React from 'react';
import MealPlanPage from './components/MealPlan/MealPlanPage';
import UserSideBar from './components/User/UserSideBar';
import Layout from './components/Layout';

function App(props) {
  return (
    <div class="flex bg-gray-200" style={{ minHeight: '-webkit-fill-available' }}>
      <Layout />
    </div>
  );
}

export default App;
