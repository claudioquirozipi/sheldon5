import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import filterReducer  from './filter';
import checkboxSelect from './checkbox';
export default combineReducers({
    user: loginReducer,
    filter: filterReducer,
    checkboxSelect: checkboxSelect
})