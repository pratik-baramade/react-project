import React from "react";
import ReactDom from "react-dom"
export default class Sell extends React.Component{
  //  productname= "Buy Milk";
    render(){
        return(<div>
            <div class="row m-2">
      <div class="col-5">
        MILK
      </div>
      <div class="col-4">
        14/10/2023
      </div>
      <div class=" col-2">
<button class="btn btn-danger">
  Delete
</button>
      </div>
    </div>
        </div>)
    }
}