import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/RootReducer';

export default function configureStore() {
    const createStoreWithMiddleware = applyMiddleware()(createStore);
    const store = createStoreWithMiddleware();
    return store;
}
