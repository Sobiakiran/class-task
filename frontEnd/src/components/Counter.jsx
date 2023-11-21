import React,{useCallback, useState} from 'react'
import ChildA from './ChildA'

const counter = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount]=useState(0);
    const Learning = useCallback(()=>{
        // some functions
    },[])
    
      
  return (
    <div>
      <h1>Learning CallBacks</h1>
      <ChildA Learning = {Learning}/>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
    </div>
  )
}

export default counter
