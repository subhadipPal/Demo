import React from "react";
import { connect } from "react-redux";

const ErrorDisplay = props => {
  return <div>Error Display</div>;
};

var mapStateToProps = state => {
  return {
    githubData: state.githubData
  };
};
export default connect(mapStateToProps)(ErrorDisplay);
