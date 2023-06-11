import { takeLatest, put } from 'redux-saga/effects';
import { RESET_KEYS } from './actions';

function* resetKeysSaga() {
  yield put({ type: RESET_KEYS });
}

function* watchResetKeys() {
  yield takeLatest(RESET_KEYS, resetKeysSaga);
}

export default function* rootSaga() {
  yield watchResetKeys();
}
