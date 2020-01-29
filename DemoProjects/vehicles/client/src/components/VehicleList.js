import React from "react";
import { connect } from "react-redux";

class VehicleList extends React.Component {
  renderVehiclesGrid = vehicle => (
    <tr
      key={`${vehicle.make}${vehicle.model}${vehicle.enginePowerPS}${vehicle.enginePowerKW}${
        vehicle.fuelType
      }${vehicle.bodyType}${vehicle.engineCapacity}${Math.random() * Math.random() * 9999}`}
    >
      <td>{vehicle.make}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.enginePowerPS}</td>
      <td>{vehicle.enginePowerKW}</td>
      <td>{vehicle.fuelType}</td>
      <td>{vehicle.bodyType}</td>
      <td>{vehicle.engineCapacity}</td>
    </tr>
  );
  render() {
    if (this.props.vehicles) {
      const { vehicles } = this.props;
      return (
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Vehicle Make</th>
              <th>Vehicle Model</th>
              <th>Vehicle Engine Power(PS)</th>
              <th>Vehicle Engine Power(KW)</th>
              <th>Vehicle Fuel Type</th>
              <th>Vehicle Body Type</th>
              <th>Vehicle Engine Capacity</th>
            </tr>
          </thead>
          <tbody>{vehicles.map(this.renderVehiclesGrid)}</tbody>
        </table>
      );
    } else {
      return <div>No Vehicles found</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles.vehicles
  };
};

export default connect(mapStateToProps)(VehicleList);
