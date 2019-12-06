import {
    LOADER_DATA,
    RESET_DATA,
    ORDER_BY
} from '../../types';


//filter
export const loaderDataAcction = (payload) => ({
    type: LOADER_DATA,
    payload
});
export const resetDataAcction = () => ({
    type: RESET_DATA
});
export const orderByAcction = (payload) => ({
    type: ORDER_BY,
    payload
});
