import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";

import DropDown from "./Dropdown";
import { setGameRating } from "../../actions";
import { connect } from "react-redux";

const RatingForm = props => {
  const { fieldName, fieldLabel, fieldItems, fieldValue } = { ...props };

  const [oldValue] = useState(fieldValue);

  const handleChange = (e, newValue) => {
    props.setGameRating(parseInt(newValue), parseInt(oldValue));
  };

  return (
    <Field
      name={fieldName}
      label={fieldLabel}
      games={fieldItems}
      defaultValue={fieldValue}
      component={DropDown}
      onChange={handleChange}
    />
  );
};

var wrappedForm = reduxForm({
  form: "rating-form"
})(RatingForm);

var mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, { setGameRating })(wrappedForm);
