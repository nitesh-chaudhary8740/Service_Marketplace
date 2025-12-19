import { useState } from "react"
import { inputHandler } from "./utils/inputHandler"



function App() {
const [input,setInput]=useState({
  n:'',
  e:''
})

return (
    <>
<form action="">
  <input value={input.n} 
  onChange={inputHandler(setInput)}
  type="text" name="n" placeholder="name"/>
  <input onChange={inputHandler(setInput)} value={input.e} type="text" name="e" placeholder="email" />
</form>
    </>
  )
}

export default App
