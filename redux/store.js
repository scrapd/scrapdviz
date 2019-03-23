import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

// Apply the middlewares and enable the Redux DevTools if necessary.
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// Define the initial state of the store .
const initialState = {
  date_filter: {},
  fatalities: []
}

// Define the redux action types.
export const actionTypes = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_ASYNC: 'FETCH_DATA_ASYNC',
}

// Define reducers.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state, ...action.payload
      }

    default:
      return state
  }
}

// Define actions.
export const fetchData = (fatalities) => ({
  type: actionTypes.FETCH_DATA,
  payload: { fatalities }
});

export const fetchDataAsync = (date_filter) => ({
  type: actionTypes.FETCH_DATA_ASYNC,
  payload: { date_filter }
});

// Initialize store.
export function initializeStore(initialState = initialState) {
  const store = createStore(reducer, initialState, bindMiddleware([sagaMiddleware]))
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask()
  return store
}
