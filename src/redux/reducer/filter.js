import {
    FILTER_ONCHAGE
} from '../types';


const inicialState = {
    filter: {}
}

export default function( state = inicialState , action) {
    switch(action.type) {
        case FILTER_ONCHAGE:
            return {
                ...state,
                filter: action.payload,
            }
        
        default: 
            return state;
    }
}