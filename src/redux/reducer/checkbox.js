import {
    CHECKBOX_SELECT
} from '../types';


const inicialState = {
    checkbox: []
}

export default function( state = inicialState , action) {
    switch(action.type) {
        case CHECKBOX_SELECT:
            return {
                ...state,
                checkbox: action.payload,
            }
        
        default: 
            return state;
    }
}