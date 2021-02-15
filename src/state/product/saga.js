import { all, takeEvery, call, put } from 'redux-saga/effects';

import { getProductsByType } from '../../api/product';
import { GET_PRODUCTS_BY_TYPE, getProductsByTypeFinish } from './actions';

function* watchGetProductsByType({ payload }) {
    const { type } = payload;
    const { code, data } = yield call(getProductsByType, type);
    yield put(getProductsByTypeFinish({
        success: code === 200,
        data
    }));
}

export function* rootSagas() {
    yield all([
        takeEvery(GET_PRODUCTS_BY_TYPE, watchGetProductsByType)
    ]);
}
