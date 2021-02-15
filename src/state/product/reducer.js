import produce from 'immer';
import {
    GET_PRODUCTS_BY_TYPE,
    GET_PRODUCTS_BY_TYPE_FINISH
} from './actions';

const initState = {
    loading: false,
    products: []
};

export const reducer = produce((draft, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BY_TYPE: {
            draft.loading = true;
            break;
        }
        case GET_PRODUCTS_BY_TYPE_FINISH: {
            const { success, data } = action.payload;
            if (success) {
                draft.products = data;
            }
            draft.loading = false;
            break;
        }
        default:
            break;
    }
}, initState);
