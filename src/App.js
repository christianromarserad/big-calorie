import React from 'react';
import MealPlanPage from './components/MealPlan/MealPlanPage';
import UserSideBar from './components/User/UserSideBar';
import Layout from './components/Layout';
import Div100vh from 'react-div-100vh';

function App(props) {
  return (
    <Div100vh class="bg-gray-200">
      <Layout />
    </Div100vh >
  );
}

export default App;
