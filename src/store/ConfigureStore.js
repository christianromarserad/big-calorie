import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as CountReducer } from './CounterReducer';
import { reducer as MealPlanReducer } from './MealPlanReducer';

export default function configureStore() {
    return createStore(combineReducers({
        counter: CountReducer,
        mealPlan: MealPlanReducer
    }), applyMiddleware(thunk));
}