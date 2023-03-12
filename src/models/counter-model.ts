
export type counterType = {
  value: number
}

export const defaultCounterState = ():counterType => {
  return {
    value: 0
  }
}