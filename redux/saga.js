import moment from 'moment';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, fetchData } from './store'

// Use this for mocking only.
// import { fatalities } from '../mock-api/mock-data'

function isInRange(date, from_, to) {
  const d = moment(date, 'MM/DD/YYYY');
  if (d.isBefore(from_)) {
    return false;
  }
  if (d.isAfter(to)) {
    return false;
  }
  return true;
}

function filterFatalities(fatalities, from_, to) {
  let data = new Array()
  for (var i = 0; i < fatalities.length; i++) {
    const d = fatalities[i]['Date'];
    if (isInRange(d, from_, to)) {
      data.push(fatalities[i]);
    }
  }
  return data;
}

function* watchFetchDataAsync() {
  yield takeLatest(actionTypes.FETCH_DATA_ASYNC, workerFetchDataAsync);
}

function* workerFetchDataAsync(action) {
  const { from_, to } = action.payload.date_filter;
  const endpoint = 'https://raw.githubusercontent.com/scrapd/datasets/master/datasets/fatalities-all-augmented.json';
  const response = yield call(fetch, endpoint);
  const fatalities = yield call([response, "json"]);
  const f = filterFatalities(fatalities, from_, to);
  // yield delay(1000)
  yield put(fetchData(f));
}

// Single entry point to start all Sagas at once.
export default function* rootSaga() {
  yield all([
    watchFetchDataAsync()
  ])
}
