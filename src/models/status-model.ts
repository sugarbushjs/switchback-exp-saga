
export enum StatusTypes {
  Available,
  Busy,
  Offline
}

export type StatusType = {
  myStatus: number
}

export const defaultStatusState = ():StatusType => {
  return {
    myStatus: -1
  }
}