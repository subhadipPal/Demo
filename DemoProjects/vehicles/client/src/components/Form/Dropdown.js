import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentWillReceiveProps(props) {
    if (!props.defaultValue) {
      this.myRef.current.value = "#";
    }
  }

  renderSelectOptions = item => (
    <option key={item} value={item}>
      {item}
    </option>
  );

  render() {
    const { input, label, items } = this.props;
    delete input.value;

    if (items) {
      return (
        <select {...input} defaultValue={this.props.defaultValue} ref={this.myRef}>
          <option value="#">{label}</option>
          {items.map(this.renderSelectOptions)}
        </select>
      );
    } else {
      return <div>Loading makes...</div>;
    }
  }
}

export default DropDown;
