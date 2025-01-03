import React from "react";
import Reactdom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 const Buttons=(onButtonClick)=>{
    const buttonname=[
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    "."];

    return(<>
        <div class="row">
         {buttonname.map((buttonname, index)=>{
            <button class="col-2  btn-secondary"
             onclick={()=>onButtonClick(buttonname)}>{buttonname}</button>
            
          }) }
          <h1>hello</h1>
        </div>
        </>
    );
   
 };
    

export default Buttons;

       
