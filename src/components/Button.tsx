import { useState } from "react"

export function Button() {
 const [counter, setCounter] = useState(0)
  
 function increment() {
  setCounter(counter + 1)
}

  return (
    <button onClick={increment}>
      Clique para adicionar { counter }
    </button>
  )
}