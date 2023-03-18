import { switchback } from 'sugarbush'
import SystemState from './system-reducer'
import CounterState from './counter-reducer'
import StatusState from './status-reducer'
import { SAGA_BYPASS } from '../config/app-globals'

const reducers = switchback({
    SystemState,
    CounterState,
    StatusState,
  }, { sagaBypass: SAGA_BYPASS }
)

export default reducers
export type RootState = ReturnType<typeof reducers>