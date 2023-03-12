import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from '../../reducers'
import sagas from '../../sagas'

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: reducers,
  middleware: [saga],
})
saga.run(sagas)

