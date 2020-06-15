import React from 'react'
import { StoreProvider } from './model/context'
import { Stopwatch } from './components'

function App() {
  return (
    <StoreProvider>
      <Stopwatch />
    </StoreProvider>
  )
}

export default App
