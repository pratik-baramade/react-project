import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Elements } from './Elements';

function App() {
  const [Data, setData] = useState([]);//using store data on Element page using map

  const [id,Setid]=useState(0);
  const [FirstName,SetFerstName]=useState('');
  const [LastName,SetLastName]=useState('');
  const [Age,SetAge]=useState(0);
  const [isUpdate,Setupdate]=useState(false);

  useEffect(()=>{
    setData(Elements)
  },[]);
//======================================================================
  const handeleEdit=(id)=>{
    const dt=Data.filter(item=>item.id===id);
    if(dt!==undefined){
      Setupdate(true);
      Setid(dt[0].id);
      SetFerstName(dt[0].FirstName);
      SetLastName(dt[0].LastName);
      // SetLastName(dt[0].LastName);
      SetAge(dt[0].Age);
    }
    // alert(id);
  }
  //======================================================================
  const handleDelet=(id)=>{
    if(window.confirm("Do You want to conform")){
    if(id>0){
      let filterdata=Data.filter(item=>item.id!=id)
      setData(filterdata);
    }
  }
}
 //======================================================================
  const handeleclear=(id)=>{
    Setupdate(false);
    Setid(0);
    SetFerstName('');
    SetLastName('');
    SetLastName('');
    SetAge('');
    alert("Data Clear Sucessfully")

  }
  //======================================================================
  const handleUpdate=()=>{
    const index=Data.map((item)=>{
      return item.id
    }).indexOf(id);
    const up=[ ...Data];
    up[index].id=id; 
    up[index].FirstName=FirstName;
    up[index].LastName=LastName;
    up[index].Age=Age;
    setData(up);
    handeleclear();

  }
  
  //======================================================================
  
  const handlesave=(e)=>{
     e.preventDefault();
    const dt=[...Data];
    const newobject={
      id:Elements.length+1,
      FirstName:FirstName,
      LastName :LastName,
      Age:Age
    }
    if(1<=1){
    dt.push(newobject);
    setData(dt);
    }
  }
//======================================================================
  return (
    <>
    <div className='container'>
      <div className='App'>

        <div className=' d-flex align-center'>

        <div className='m-2'>
        <lable for="id"><b>ID : </b> </lable>
        <input type="text" className='m-2' id="id" placeholder='Enter the id' value={id}/>
        </div>
        
        <div className='m-2'>
        <lable for="fn"><b>FirstName : </b></lable>
        <input type="text" className='m-2' id="fn" placeholder='Enter the Name' onChange={(e)=>SetFerstName(e.target.value)} value={FirstName}/>
        </div>

        <div className='m-2'>
        <lable for="ln"><b>LastName : </b></lable>
        <input type="text" className='m-2' id="ln" placeholder='Enter the LastName' onChange={(e)=>SetLastName(e.target.value)} value={LastName}/>
        </div>

        <div className='m-2'>
        <lable for="age"><b>Age : </b></lable>
        <input type="text" className='m-2' id="age" placeholder='Enter the Age' onChange={(e)=>SetAge(e.target.value)} value={Age}/>
        </div>
        <div className='m-2'>
        {
          !isUpdate ?
          <button className="btn btn-primary m-1" onClick={(e)=>handlesave(e)}>Save</button>
          :
          <button className="btn btn-primary m-1" onClick={()=>handleUpdate()}>Update</button>
        }

        <button className="btn btn-primary"  onClick={()=>handeleclear()}>Clear</button>
        </div >
         
        </div>
    
        <table className='table table-hover '>
        <thead>
          <tr>
            <td>Sr.no</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
           
            Data.map((item,index)=>{
              return(
                   <>
                   <tr key={index}></tr>
                   <td>{index+1}</td>
                   <td>{item.id}</td>
                   <td>{item.FirstName}</td>
                   <td>{item.LastName}</td>
                   <td>{item.Age}</td>
                   <td>
                  
                    <button className="btn bg-primary m-2"  onClick={()=>handeleEdit(item.id)}> Edit</button>
                    <button className="btn bg-danger m-2"  onClick={()=>handleDelet(item.id)}>Delet</button>
                    
                   </td>
                   </>
              )
            
              
            })
            
          }
         </tbody> 
       </table> 
      </div>
      </div>
    </>
  )
}

export default App
