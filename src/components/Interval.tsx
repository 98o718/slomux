import React, { useContext } from 'react'
import { StoreContext } from '../model/context'
import { changeInterval } from '../model/actions'

const Interval = () => {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <div>
      <span>Интервал обновления секундомера: {state.interval} сек.</span>
      <span>
        <button
          onClick={() =>
            dispatch(changeInterval(state.interval === 1 ? 0 : -1))
          }
        >
          -
        </button>
        <button onClick={() => dispatch(changeInterval(1))}>+</button>
      </span>
    </div>
  )
}

export default Interval
