import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appname from './Appname';
import InputText from './inputtext';
import Sell from './cellproduct';
import Collage from './collage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <center class="todo-center text-center ">
    <Appname/>
    <InputText/>
    <Sell/>
    <Collage/>
  </center>
}

export default App
