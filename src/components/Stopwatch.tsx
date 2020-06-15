import React, { useState, useContext } from 'react'
import { Interval } from '.'
import { StoreContext } from '../model/context'

const Stopwatch = () => {
  const {
    state: { interval },
  } = useContext(StoreContext)
  const [time, setTime] = useState(0)
  const [int, setInt] = useState<NodeJS.Timeout>()

  const handleStart = () => {
    if (int) clearInterval(int)
    setTime(0)
    const i = setInterval(() => {
      setTime((prev) => prev + interval)
    }, interval * 1000)
    setInt(i)
  }

  const handleStop = () => {
    if (int) clearInterval(int)
  }

  return (
    <div>
      <Interval />
      <div>Секундомер: {time} сек.</div>
      <div>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>
    </div>
  )
}

export default Stopwatch
