import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AddTodo/>
    <Todos/>
     </div>
  )
}

export default App
