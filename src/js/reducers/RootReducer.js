import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './Modal';

const reducers = {
    modal: modalReducer,
    form: formReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);
export default reducer;
