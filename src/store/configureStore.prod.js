
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import ReduxPromise from 'redux-promise';

const enhancer = applyMiddleware(ReduxPromise)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
