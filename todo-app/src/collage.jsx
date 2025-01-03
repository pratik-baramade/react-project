import React from "react";
import ReactDom from "react-dom"
export default class Collage extends React.Component{
    render(){
        return(<>
         <div class="row m-2">
      <div class="col-5">
        Go to Collage
      </div>
      <div class="col-4">
        4/10/2023
      </div>
      <div class="col-2 ">
<button class="btn btn-danger ">
  Delete
</button>
      </div>
    </div>
        </>)
    }
}