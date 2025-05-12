// import Content from "../content";
import { useState, useEffect, useRef, useCallback, useMemo, useReducer } from "react";
import reduce, {initState} from "./reducer";
import { setJob, addJob, deleteJob } from "./action";
function App() { 
  //----------------------------- UseReducer Hook ----------------------------------------

  // init State
  // const initState = 0;
 

  // Actions
  // const Up_Action = 'UP';
  // const Down_Action = 'Down';
  

  // reducer
  // const reducer = (state, action) =>{
  //   switch(action){
  //     case Up_Action:
  //       return state + 1
  //     case Down_Action:
  //       return state - 1
  //     default:
  //       throw new Error('invalid action')
  //   }
  // }

  


  // const [count, dispatch] = useReducer(reducer, initState)
  const [state, dispatch] = useReducer(reduce, initState)
  const{job , jobs} = state

  const inputRef = useRef()
  const handleAdd = () =>{
      dispatch(addJob(job))
      dispatch(setJob(''))
      

      inputRef.current.focus()
  }


  return (
    // <div style={{padding:'15px 32px'}}>
    //   <h1>{count}</h1>
    //   <br/>
    //   <button onClick={() => dispatch(Up_Action)}>Up</button>
    //   <button onClick={() => dispatch(Down_Action)}>Down</button>
    // </div>

    <div style={{padding: '15px 32px'}}>
      <h3>Tudo</h3>
      <input
      ref={inputRef}
      value={job} 
      placeholder="Enter work"
      onChange={e => {
          dispatch(setJob(e.target.value))
      }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
          {jobs.map((job,index)=>(
            <li key={index}>
              {job}
              <span onClick={()=>{dispatch(deleteJob(index))}}
                style={{cursor: "pointer",
                        marginLeft: '5px',
                        color: 'red'
                }}
                
              >&times;</span>
            </li>
          ))}
      </ul>
    </div>

  )
}

export default App;