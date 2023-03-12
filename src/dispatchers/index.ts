import { adpStore } from '../components/App'
import { store } from '../components/App/store'
import { adaptiveDispatch, adaptiveSagaDispatch } from 'sugarbush'

export const sagaDispatch = () => adpStore.dispatchSaga()
export const SystemDispatch = () => adpStore.dispatch('SystemState')
export const CounterDispatch = () => adaptiveDispatch({ dispatch: store.dispatch, key: 'CounterState', suppressLogging: true})
export const sagaAdpDispatch = () => adaptiveSagaDispatch({dispatch: store.dispatch })