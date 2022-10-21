
import {useState,useReducer} from 'react'


const initialReducerState = 0
const reduceFunction =(state, action)=>{
  switch(action){
    case 'addOne':
        return state + 1
    case 'minusOne':
        return state -1
    case 'reset':
        return 0
        case 'double':
            return state+state 
     deafult:
      return state
  }
}


function Counter () {
    const [counter,dispacher] = useReducer(reduceFunction,initialReducerState)
    return (
 <>
        <h1>{counter}</h1>
        <div>
            <button onClick={()=>dispacher('addOne')}>Add 1</button>
            <button onClick={()=>dispacher('minusOne')}>Minus 1</button>
            <button onClick={()=>dispacher('double')}>Double</button>
            <button onClick={()=>dispacher('reset')}>Reset</button>
        </div>
        </>
    )
}
export default Counter;