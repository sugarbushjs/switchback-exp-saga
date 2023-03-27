import { adpStore } from '../components/App'
import { store } from '../components/App/store'
import { adaptiveDispatch } from 'sugarbush'
import { adaptiveSagaDispatch } from 'sugarbush-saga'
import { SAGA_BYPASS } from '../config/app-globals'

export const SagaDispatch = () => adpStore.dispatch(SAGA_BYPASS)
export const sagaDispatch2 = () => adaptiveSagaDispatch({ dispatch: store.dispatch, key:''})
export const SystemDispatch = () => adpStore.dispatch('SystemState')
export const CounterDispatch = () => adaptiveDispatch({ dispatch: store.dispatch, key: 'CounterState'})




