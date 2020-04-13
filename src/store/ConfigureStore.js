import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as CountReducer } from './CounterReducer';

export default function configureStore() {
    return createStore(combineReducers({
        counter: CountReducer
    }), applyMiddleware(thunk));
}