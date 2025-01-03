import React from "react";
import ReactDOM from "react-dom"; // Corrected import for ReactDOM

export default class InputText extends React.Component { // Use PascalCase for component names
  render() {
    return (
      <div>
        <div className="container text-center ">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="Enter todo here" />
            </div>
            <div className="col-4">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Assuming this is how you are rendering the component somewhere else in the code
// ReactDOM.render(<InputText />, document.getElementById("root"));
