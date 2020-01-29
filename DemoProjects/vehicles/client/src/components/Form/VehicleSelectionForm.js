import React from "react";
import { reduxForm, Field } from "redux-form";

import Dropdown from "./Dropdown";
import {
  fetchVehicleMakes,
  fetchVehicleModels,
  fetchVehicles,
  setVehicleMake,
  setVehicleModel,
  resetSelection
} from "../../actions";
import { connect } from "react-redux";

class VehicleSelectionForm extends React.Component {
  componentDidMount() {
    this.props.fetchVehicleMakes();
  }
  loadModels(props, newValue) {
    props.fetchVehicleModels(newValue);
    props.setVehicleMake(newValue);
  }
  loadVehicles(props, newValue) {
    props.fetchVehicles(newValue);
    props.setVehicleModel(newValue);
  }
  resetSelection(e) {
    e.preventDefault();
    this.props.resetSelection();
  }
  render() {
    if (this.props.makes) {
      const { makes, models, selectedVehicleMake, selectedVehicleModel } = this.props;
      return (
        <form className="ui form">
          <div className="field">
            <Field
              name="vehiclemake"
              label="Select vehicle make"
              component={Dropdown}
              items={makes}
              defaultValue={selectedVehicleMake}
              onChange={(e, v) => this.loadModels(this.props, v)}
            />
          </div>
          {models ? (
            <div className="field">
              <Field
                name="vehiclemodel"
                label="Select vehicle model"
                component={Dropdown}
                items={models}
                defaultValue={selectedVehicleModel}
                onChange={(e, v) => this.loadVehicles(this.props, v)}
              />
            </div>
          ) : (
            ""
          )}
          <button className="ui button primary" onClick={e => this.resetSelection(e)}>
            Reset
          </button>
        </form>
      );
    } else {
      return (
        <div>
          <button className="ui button primary" onClick={e => this.props.fetchVehicleMakes()}>
            RELOAD
          </button>
        </div>
      );
    }
  }
}
const formWrapped = reduxForm({
  form: "vehicle-selection"
})(VehicleSelectionForm);

const mapStateToProps = state => {
  return {
    makes: state.vehicles.makes,
    models: state.vehicles.models,
    selectedVehicleMake: state.vehicles.selectedVehicleMake,
    selectedVehicleModel: state.vehicles.selectedVehicleModel
  };
};

export default connect(mapStateToProps, {
  fetchVehicleMakes,
  fetchVehicleModels,
  fetchVehicles,
  setVehicleMake,
  setVehicleModel,
  resetSelection
})(formWrapped);
