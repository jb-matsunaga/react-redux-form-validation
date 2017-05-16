import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer';
console.log('RootReducer = ' + RootReducer);
export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware()(createStore);
    const store = createStoreWithMiddleware(RootReducer);
    return store;
}
