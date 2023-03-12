import { StatusActionEnums } from '../actions/status-actions'
import { Message } from '../components/UI/Message'
import { defaultStatusState, StatusType } from '../models/status-model'

const reducer = (state: StatusType = defaultStatusState(), action: any ) => {
  Message(`Status Reducer ${action.type}`, action.type)
  console.log('Running STATUS Reducer...')
  switch (action.type) {
    case StatusActionEnums.SET_STATUS:
      return {
        ...state,
        myStatus: action.payload
      }
    default:
      return state
  }
}

export default reducer