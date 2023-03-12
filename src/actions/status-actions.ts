

export enum StatusActionEnums {
  'FETCH_STATUS' = 'FETCH_STATUS',
  'SET_STATUS' = 'SET_STATUS'
}

export type StatusActions =
  | { type: StatusActionEnums.FETCH_STATUS, payload: number }
  | { type: StatusActionEnums.SET_STATUS, payload: number }


export const fetchStatus = (status: number): StatusActions => ({ type: StatusActionEnums.FETCH_STATUS, payload: status })
export const setStatus = (status: number): StatusActions => ({ type: StatusActionEnums.SET_STATUS, payload: status})