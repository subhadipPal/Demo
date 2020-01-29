import React from "react";

class DropDown extends React.Component {
  renderSelectOptions = game => (
    <option key={game.id} value={game.id}>
      {game.id}
    </option>
  );

  render() {
    const { input, label, games, defaultValue } = { ...this.props };
    input.value = defaultValue;
    return (
      <div>
        <label className="dropdown-label">{label}:</label>
        <select {...input} className="field-dropdown">
          <option></option>
          {games.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}

export default DropDown;
