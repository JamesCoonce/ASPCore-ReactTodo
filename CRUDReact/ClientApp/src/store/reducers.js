import {combineReducers} from 'redux';
import todoReducer from '../components/todo/todoReducer';
const reducers = combineReducers({todoReducer});
export default reducers;
