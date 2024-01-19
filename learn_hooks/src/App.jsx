import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    if (count == 20) {
      return
    } else {
      setCount(count + 1)
    }
  }
  function removeCount() {
    if (count == 0) {
      return
    } else {
      setCount(count - 1)
    }

  }

  return (
    <>
      <h1>hooks in react</h1>
      <h1>value:{count}</h1>
      <button onClick={addCount}>Add</button>
      <br></br>
      <button onClick={removeCount}>Remove</button>

    </>
  )
}

export default App