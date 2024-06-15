import Child from "./Components/Child"
import { useState } from "react"

const App =()=>{
  let [count , setCount]=useState(0)
  let plus=()=>{
      setCount(++count)
  }
  let minus=()=>{
      setCount(count<=0?count=0:--count)
  }
  let reset=()=>{
      setCount(0)
  }
  return(
    <div>
      <Child pluse={plus} minus={minus} reset={reset} count={count} />
    </div>
  )
}
export default App
