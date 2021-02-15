export const GET_PRODUCTS_BY_TYPE = "product/GET_PRODUCTS_BY_TYPE";
export const GET_PRODUCTS_BY_TYPE_FINISH = "product/GET_PRODUCTS_BY_TYPE_FINISH";

export const getProductsByType = (payload) => ({
    type: GET_PRODUCTS_BY_TYPE,
    payload
});

export const getProductsByTypeFinish = (payload) => ({
    type: GET_PRODUCTS_BY_TYPE_FINISH,
    payload
});
