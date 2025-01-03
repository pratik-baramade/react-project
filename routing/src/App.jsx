import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import './App.css'
import NewQuestions from "./component/NewQuestions";
import ViewQuestions from "./component/ViewQuestions";
import AllQuestions from "./component/AllQuestions";
import Shedul from './component/Shedul';
import StartExam from './component/StartExam';
import Result from './component/Result';

let [list,setlist]=useState([]);
let handleCallBack=(childData)=>{
setlist(childData);
}
function App() {
  

  return (<>
  <BrowserRouter>
    <div className="Wrapper md">
      <div className="container ">
        <nav>
    <div className="list-group list d-flex flex-row p-2">
      <NavLink className="list-item list-group-item-action text-decoration-none te" to="/Add">Add New Question</NavLink>
      <NavLink className="list-item list-group-item-action text-decoration-none "to="/view">View All Questions</NavLink>
      <NavLink className="list-item list-group-item-action text-decoration-none" to="/questionbank">View All Questions</NavLink>
      <NavLink className="list-item list-group-item-action text-decoration-none" to="/Time" >Schedule Exam</NavLink>
      <NavLink className="list-item list-group-item-action text-decoration-none" to="/Start" >Start Exam</NavLink>
      <NavLink className="list-item list-group-item-action text-decoration-none" to="/result" >Result</NavLink>
    </div>
    </nav>
    </div>
    </div>
    <Routes>
      <Route path='/' element={<h1>HOme page</h1>}/>
      <Route path='/Add' element={<NewQuestions parentcallBack={handleCallBack}/>}/>
      <Route path='/view' element={<ViewQuestions/>}/>
      <Route path='/questionbank' element={<AllQuestions/>}/>
      <Route path='/Time' element={<Shedul/>}/>
      <Route path='/Start' element={<StartExam/>}/>
      <Route path='/result' element={<Result/>}/>
  </Routes>
    </BrowserRouter>
  </>  
  )
}

export default App
