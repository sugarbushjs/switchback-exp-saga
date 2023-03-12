
export enum SystemActionEnum {
  FETCH_SYSTEM_THEME = 'FETCH_SYSTEM_THEME',
  SET_SYSTEM_THEME = 'SET_SYSTEM_THEME',
  SET_SYSTEM_TIME = 'SET_SYSTEM_TIME'
}

export type SystemActions =
  | { type: SystemActionEnum.FETCH_SYSTEM_THEME }
  | { type: SystemActionEnum.SET_SYSTEM_THEME, payload: string }
  | { type: SystemActionEnum.SET_SYSTEM_TIME, payload: number}


export const fetchSystemTheme = () => ({ type: SystemActionEnum.FETCH_SYSTEM_THEME })
export const setSystemTheme = (theme: string): SystemActions => ({ type: SystemActionEnum.SET_SYSTEM_THEME, payload: theme})
export const setSystemTime = (zone: number): SystemActions => ({ type: SystemActionEnum.SET_SYSTEM_TIME, payload: zone})