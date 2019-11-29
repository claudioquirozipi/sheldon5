import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import filterReducer  from './salesFunnel/filter';
import loaderDataReducer from './salesFunnel/loaderData';
import checkboxSelect from './checkbox';

export default combineReducers({
    user: loginReducer,
    salesFunnelFilter: filterReducer,
    salesFunnelLoaderData: loaderDataReducer,
    checkboxSelect: checkboxSelect
})