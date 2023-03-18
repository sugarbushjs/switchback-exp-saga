import { CounterActionEnum } from '../actions/counter-actions'
import { Message } from '../components/UI/Message'
import { defaultCounterState, counterType } from '../models/counter-model'

const initialState = defaultCounterState()

const reducer = (state: counterType = initialState, action: any ) => {
  Message(`Counter Reducer ${action.type}`, action.type)
  console.log('Running Counter Reducer...')
  switch(action.type) {
    case CounterActionEnum.INCREMENT_COUNTER:
      let addValue = state.value
      return {
        ...state,
        value: addValue + 1
      }
    case CounterActionEnum.DECREMENT_COUNTER:
      let subValue = state.value
      return {
        ...state,
        value: subValue - 1
      }
    default:
      return state
  }
}

export default reducer