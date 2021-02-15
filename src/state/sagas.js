import { all, fork, put } from 'redux-saga/effects';
import { sagas } from './modules';
import { getProductsByType } from './product/actions';

function* initApp() {
    yield all([
        put(getProductsByType({ type: '' }))
    ]);
}

export function* rootSaga() {
  yield all([
    fork(initApp),
    ...sagas.map(saga => fork(saga))
  ])
}
