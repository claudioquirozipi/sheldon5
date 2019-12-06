import {
    LOADER_DATA,
    RESET_DATA,
    ORDER_BY
} from '../../types';


const inicialState = {
    loaderData: [],
    pageCounter: 0
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
        case ORDER_BY:
            return {
                ...state,
                loaderData: state.loaderData.sort((d1,d2)=>d1[action.payload] > d2[action.payload] ? 1 : -1),
                pageCounter: state.pageCounter
            }
        default: 
            return state;
    }
}