import {combineReducers} from 'redux';
import todoReducer from '../components/todo/todoReducer';
import { reducer as formReducer } from 'redux-form'
const reducers = combineReducers({
    todoReducer: todoReducer,
    form: formReducer
});
export default reducers;
