import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './Display';
import Buttons from './Buttons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div class=" gried container col-4 row-gap-3">
       <Display/>
        <Buttons/>
        
       </div>
      
    </>
  )
}

export default App
