import { CHANGE_INTERVAL, ActionTypes } from './types'
import { StopwatchState } from './context'

export const stopWatchReducer = (
  state: StopwatchState,
  action: ActionTypes
) => {
  switch (action.type) {
    case CHANGE_INTERVAL: {
      return { ...state, interval: state.interval + action.payload }
    }
    default:
      return state
  }
}
