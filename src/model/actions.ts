import { ActionTypes, CHANGE_INTERVAL } from './types'

export const changeInterval = (interval: number): ActionTypes => ({
  type: CHANGE_INTERVAL,
  payload: interval,
})
