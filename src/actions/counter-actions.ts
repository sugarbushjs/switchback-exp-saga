
export enum CounterActionEnum {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

export type CounterActions =
  | { type: CounterActionEnum.INCREMENT_COUNTER }
  | { type: CounterActionEnum.DECREMENT_COUNTER }

export const incrementCounter = (): CounterActions => ({ type: CounterActionEnum.INCREMENT_COUNTER })
export const decrementCounter = (): CounterActions => ({ type: CounterActionEnum.DECREMENT_COUNTER })