import { all } from 'redux-saga/effects'
import { watchFetchSystemSettings } from './system-saga'

function* sagas() {
  yield all([
    watchFetchSystemSettings()
  ])
}

export default sagas