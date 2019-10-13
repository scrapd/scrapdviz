import moment from 'moment';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, fetchArchives, fetchData } from './store'

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

function flattenFatalities(fatalities) {
  let datamap = new Array()
  for (var i = 0; i < fatalities.length; i++) {
    for (var j = 0; j < fatalities[i]["fatalities"].length; j++) {
      let data = Object();
      data["case"] = fatalities[i]["case"];
      data["crash"] = fatalities[i]["crash"];
      data["date"] = fatalities[i]["date"];
      data["latitude"] = fatalities[i]["latitude"];
      data["link"] = fatalities[i]["link"];
      data["location"] = fatalities[i]["location"];
      data["longitude"] = fatalities[i]["longitude"];
      data["notes"] = fatalities[i]["notes"];
      data["time"] = fatalities[i]["time"];

      data["age"] = fatalities[i]["fatalities"][j]["age"];
      data["ethnicity"] = fatalities[i]["fatalities"][j]["ethnicity"];
      data["gender"] = fatalities[i]["fatalities"][j]["gender"];
      data["name"] = fatalities[i]["fatalities"][j]["first"] + " " + fatalities[i]["fatalities"][j]["middle"] + " " + fatalities[i]["fatalities"][j]["last"] + " " + fatalities[i]["fatalities"][j]["generation"];
      datamap.push(data)
    }
  }
  return datamap;
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
  const flat_f = flattenFatalities(fatalities);
  const f = filterFatalities(flat_f, from_, to);
  // yield delay(1000)
  yield put(fetchData(f));
}

function* watchFetchArchivesAsync() {
  yield takeLatest(actionTypes.FETCH_ARCHIVES_ASYNC, workerFetchArchivesAsync);
}

function* workerFetchArchivesAsync(action) {
  const { from_, to } = action.payload.date_filter;
  const endpoint = 'https://raw.githubusercontent.com/scrapd/datasets/master/datasets/archives-all.json';
  const response = yield call(fetch, endpoint);
  const fatalities = yield call([response, "json"]);
  const f = filterFatalities(fatalities, from_, to);
  // yield delay(1000)
  yield put(fetchArchives(f));
}

// Single entry point to start all Sagas at once.
export default function* rootSaga() {
  yield all([
    watchFetchDataAsync(), watchFetchArchivesAsync()
  ])
}

