import {
    LOADER_DATA,
    RESET_DATA
} from '../../types';


//filter
export const loaderDataAcction = (payload) => ({
    type: LOADER_DATA,
    payload
});
export const resetDataAcction = () => ({
    type: RESET_DATA
});
