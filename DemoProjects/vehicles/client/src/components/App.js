import React from "react";
import VehicleSelectionForm from "../components/Form/VehicleSelectionForm";
import VehicleList from "../components/VehicleList";
import "./App.css";
import Modal from "../components/Modal";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">Select Cars</div>
      <div className="ui container bodyContainer">
        <div className="ui segment">
          <div>
            <VehicleSelectionForm></VehicleSelectionForm>
          </div>
        </div>
        <div>
          <VehicleList></VehicleList>
        </div>
        <Modal></Modal>
      </div>
    </div>
  );
};

export default App;
