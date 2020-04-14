import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as CountReducer } from '../store/CounterReducer';
import { reducer as MealPlanReducer } from '../store/MealPlanReducer';

export default function configureStore() {
    return createStore(combineReducers({
        counter: CountReducer,
        mealPlan: MealPlanReducer
    }), applyMiddleware(thunk));
}