import {combineReducers} from 'redux';
import modalReducer from './Modal';
console.log('modalReducer = ' + modalReducer);

const App = combineReducers({
    modalReducer,
});

export default App;
