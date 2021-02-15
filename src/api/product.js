import apiClient from './apiClient';

export const getProductsByType = (type) => {
    return apiClient('GET', `products/${type}`);
};
