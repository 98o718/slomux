import React, { createContext, useReducer } from 'react'
import { stopWatchReducer } from './reducers'

export interface StopwatchState {
  interval: number
}

const initialState = {
  interval: 1,
}

const StoreContext = createContext<{
  state: StopwatchState
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(stopWatchReducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }
