import { SystemActionEnum, SystemActions } from '../actions/system-actions'
import { defaultSystemState, systemStateType } from '../models/system-mode'
import { Message } from '../components/UI/Message'

const initialState = defaultSystemState()

const reducer = (state: systemStateType = initialState, action: SystemActions ) => {
  if(!state.isLoading){
    Message(`System Reducer ${action.type}`, action.type)
  }
  console.log('Running SYSTEM Reducer...')
  switch(action.type) {
    case SystemActionEnum.SET_SYSTEM_THEME:
      return {
        ...state,
        theme: action.payload,
        isLoading: false
      }
    case SystemActionEnum.SET_SYSTEM_TIME:
      return {
        ...state,
        timeZone: action.payload
      }
    default:
      return state
  }
}

export default reducer