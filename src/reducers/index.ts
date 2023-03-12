import { switchback } from 'sugarbush'
import SystemState from './system-reducer'
import CounterState from './counter-reducer'
import StatusState from './status-reducer'

const reducers = switchback({
  SystemState,
  CounterState,
  StatusState,
})

export default reducers
export type RootState = ReturnType<typeof reducers>