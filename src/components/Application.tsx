import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as CounterActions from '../actions/counter-actions'
import * as StatusActions from '../actions/status-actions'
import { SystemDispatch, CounterDispatch, sagaDispatch, sagaAdpDispatch } from '../dispatchers'
import { ZoneTypes } from '../utilities/date-util'
import * as Selectors from '../selectors'
import * as SystemActions from '../actions/system-actions'
import TimeZone from './UI/TimeZone'
import Button, { ButtonType } from './UI/Button'
import Dropdown from './UI/Dropdown'
import Switch from 'react-switch'
import styled from 'styled-components'
import logo from '../assets/logo-sm.png'

const Application = () => {
  const dispatch = useDispatch()
  const dispatchSystem = SystemDispatch()
  const dispatchCount = CounterDispatch()
  const dispatchSaga = sagaAdpDispatch()
  const currentState = useSelector(Selectors.selectState)
  const theme = useSelector(Selectors.selectTheme)
  const timeZone =  useSelector(Selectors.selectTimeZone)
  const status = useSelector(Selectors.selectStatus)
  const counter = useSelector(Selectors.selectCount)
  const dataFetchRef = useRef(false)

  const [themeChecked, setThemeChecked] = useState<boolean>(false)
  const [zoneChecked, setZoneChecked] = useState<boolean>(false)

  useEffect(() => {
    if (dataFetchRef.current) return
    /** using Sugarbush saga dispatch */
    dispatchSaga(SystemActions.fetchSystemTheme())
    dataFetchRef.current = true
    // eslint-disable-next-line
  }, [])

  const handleButtonClick = (e:any) => {
    if (e === ButtonType.plus) {
      dispatchCount(CounterActions.incrementCounter())
    } else {
      dispatchCount(CounterActions.decrementCounter())
    }
  }

  const handleSwitchChange = (value: boolean) => {
    const theme = value ? 'dark' : 'light'
    dispatchSystem(SystemActions.setSystemTheme(theme))
    setThemeChecked(value)
  }

  const handleTimezoneChange = (value: boolean) => {
    const zone = value ? ZoneTypes.UTC : ZoneTypes.Local
    setZoneChecked(value)
    dispatchSystem(SystemActions.setSystemTime(zone))
  }

  const handleOnSelect = (e: any) => {
    toast('Running all Reducers!')
    const value = e.target.value || 0
    dispatch(StatusActions.setStatus(value))
  }

  console.log(currentState)
  return (
    <AppContainer theme={theme}>
      <CenterAlignView>
        <h1>Sugarbush for react / redux</h1>
        <img src={logo} alt={'logo'} />
        <h2>with Redux Saga</h2>
      </CenterAlignView>
      <hr />
      <h3>This sections uses the <u>AdaptiveStore</u> to create a system dispatch.
        <br/>Note: Only the System Reducer will be called.
      </h3>
      <PaddedDevView>
        Set Theme: <Switch checked={themeChecked} onChange={handleSwitchChange} />
      </PaddedDevView>
      <PaddedDevView>
        Set Timezone: <Switch checked={zoneChecked} onChange={handleTimezoneChange} />
        <TimeZone zone={timeZone} />
      </PaddedDevView>
      <hr/>
      <div>
        <h3>This section uses the <u>AdaptiveDispatch</u> to create a counter dispatch.
          <br/>Note: Only the Counter reducer will be called.
        </h3>
        Counter
        <Button type={ButtonType.plus} value={'+'} handleOnClick={handleButtonClick} />
        <span style={{padding: 5}}>
           {counter}
         </span>
        <Button type={ButtonType.minus} value={'-'} handleOnClick={handleButtonClick} />
      </div>
      <hr />
      <div>
        <h3>This section uses the redux useDispatch() instead of AdaptiveStore or AdaptiveDispatch. This displays that Switchback
          can still process state without a key.
          <br/>Note: All Reducers will be called.
          <p>Note: '{'=>'} running combinedReducer logic' will output to the console log.</p>
        </h3>
        Current Status: {status}
        <Dropdown handleOnSelect={handleOnSelect} value={status}  />
      </div>
      <div>
        <hr />
        Open developer tools (F12) window to review switchback logging.
      </div>
    </AppContainer>
  )
}

export default Application

const AppContainer = styled.div<{theme: string}>`
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
`

const CenterAlignView = styled.div`
  text-align: center;
  `

const PaddedDevView = styled.div`
  padding-top: 15px;
  padding-bottom: 15px
  `