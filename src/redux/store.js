import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import {
    obtenerStorage,
    guardarStorage
} from './localstorage';

// const initialState = {};
const storage = obtenerStorage();

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    storage,
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

store.subscribe( () => {
    guardarStorage({
        user: store.getState().user
    })
})
export default store;