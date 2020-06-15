export const CHANGE_INTERVAL = 'CHANGE_INTERVAL'

export type ChangeIntervalAction = {
  type: typeof CHANGE_INTERVAL
  payload: number
}

export type ActionTypes = ChangeIntervalAction
