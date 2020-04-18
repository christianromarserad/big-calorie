import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as CountReducer } from '../store/CounterReducer';
import { reducer as MealPlanReducer } from '../store/MealPlanReducer';
import { reducer as UserReducer } from '../store/UserReducer';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('big-calorie-state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('big-calorie-state', serializedState);
    } catch (error) {
        //TODO
    }
}

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(combineReducers({
        counter: CountReducer,
        mealPlan: MealPlanReducer,
        user: UserReducer
    }), persistedState, applyMiddleware(thunk));


    store.subscribe(() => {
        saveState(store.getState());
    });

    return store;
}

export default configureStore;