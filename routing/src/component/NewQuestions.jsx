import React,{useState} from "react";
import reactdom from "react-dom";

let NewQuestions=(props)=>{
    let[ques,setQues]=useState({
        id:1,
        questions:"",
        op1:"", 
        op2:"",
        op3:"",
        op4:"",
        Ans:0
     });
     let [list,setleast]=useState([])
     let uniHandler=(e)=>{
        setQues(prevState=()=>{
            return {
            ...prevState,[e.target.name]:e.target.value
            } 
        } );

     }
     let saveQuestions=()=>{
      setQues(prevState=>{
         return{
            ...prevState,id:ques.id+1
         }
      });
      setleast([...list,ques]);
      props.parentcallBack(list);
     }
    return(<>
   <div className="container m-5 p-5 bg-danger">
    <lable type="q">Questions</lable>
   <input class="form-control" name="questions"type="text" placeholder="Disabled input"value={ques.questions} aria-label="Disabled input example" onChange={(e)=>uniHandler(e)} disabled/>
<input class="form-control m-2"name="op1" id="q" type="text" value={ques.op1} aria-label="Disabled input example" disabled onChange={(e)=>uniHandler(e)} readonly/>
<input class="form-control m-2" name="op2"id="q" type="text" value={ques.op2} aria-label="Disabled input example" disabled onChange={(e)=>uniHandler(e)} readonly/>
<input class="form-control m-2" name="op3"id="q" type="text" value={ques.op3} aria-label="Disabled input example" disabled onChange={(e)=>uniHandler(e)} readonly/>
<input class="form-control m-2" name="op4" id="q" type="text" value={ques.op4} aria-label="Disabled input example" disabled onChange={(e)=>uniHandler(e)} readonly/>
<input class="form-control m-2" name="Ans"id="q" type="text" value={ques.Ans} aria-label="Disabled input example" disabled  onChange={(e)=>uniHandler(e)} readonly/>
{/* <input class="form-control m-2 btn bg-primary align-center" id="q" type="submit" value="AddQuestion" aria-label="Disabled input example" /> */}
   </div>
    </>);
}
export default NewQuestions;