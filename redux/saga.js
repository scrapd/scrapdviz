import { all, delay, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, fetchData } from './store'
import { fatalities } from '../mock-api/mock-data'


function* watchFetchDataAsync() {
  yield takeLatest(actionTypes.FETCH_DATA_ASYNC, workerFetchDataAsync);
}

function* workerFetchDataAsync(action) {
  const { from_, to } = action.payload.date_filter;
  yield delay(1000)
  yield put(fetchData(fatalities));
}

// Single entry point to start all Sagas at once.
export default function* rootSaga() {
  yield all([
    watchFetchDataAsync()
  ])
}
