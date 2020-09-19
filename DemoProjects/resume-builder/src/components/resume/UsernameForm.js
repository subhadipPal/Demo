import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { getGithubData } from "../../actions";

class UsernameForm extends React.PureComponent {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <div className={className}>
          <label className="label">{label}: </label>
          <input className="input" {...input} autoComplete="off"></input>
        </div>
        {this.renderError(meta)}
      </div>
    );
  };
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error-msg-cls">{error}</div>;
    }
  };

  onSubmit = formValues => {
    this.props.getGithubData(formValues.username);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="username" component={this.renderInput} label="Enter Username"></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.searchField) {
    errors.searchField = "*Username can not be empty.";
  }
  return errors;
};

var wrappedForm = reduxForm({
  form: "username-form",
  validate
})(UsernameForm);

var mapStateToProps = state => {
  return {
    githubData: state.githubData
  };
};

export default connect(mapStateToProps, { getGithubData })(wrappedForm);
