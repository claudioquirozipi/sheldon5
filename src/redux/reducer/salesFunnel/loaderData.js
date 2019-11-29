import {
    LOADER_DATA,
    RESET_DATA
} from '../../types';


const inicialState = {
    loaderData: [],
    pageCounter: 1
}

export default function( state = inicialState , action) {
    switch(action.type) {
        case LOADER_DATA:
            return {
                ...state,
                loaderData: [...state.loaderData , ...action.payload],
                pageCounter: state.pageCounter + 1
            }
        case RESET_DATA:
            return {
                ...state,
                loaderData: [],
                pageCounter: 1
            }
        default: 
            return state;
    }
}