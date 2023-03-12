import { takeEvery } from 'redux-saga/effects'
import { spPut } from 'sugarbush'
import { SystemActionEnum } from '../actions/system-actions'

/** Using the sugarbush effect of spPut */
const _put = spPut('SystemState')
export function* watchFetchSystemSettings() {
  yield takeEvery(SystemActionEnum.FETCH_SYSTEM_THEME, fetchSetSystemTheme)
}

/* API Calls*/
function* fetchSetSystemTheme() {
  /** Using the sugarbush effect of spPut */
  yield _put(SystemActionEnum.SET_SYSTEM_THEME, 'GREEN')
}

