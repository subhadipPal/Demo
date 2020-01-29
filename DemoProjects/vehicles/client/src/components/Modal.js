import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { resetSelection } from "../actions";

class Modal extends React.Component {
  resetForm() {
    this.props.resetSelection();
  }
  render() {
    if (this.props.error) {
      return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
          <div
            onClick={event => event.stopPropagation()}
            className="ui standard modal visible active"
          >
            <div className="header">Error</div>
            <div className="content">{this.props.error.message}</div>
            <div className="rightside">
              <button
                style={{ marginBottom: "5px" }}
                className="ui right floated negative button"
                onClick={e => this.resetForm()}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      );
    } else {
      return "";
    }
  }
}
const mapStateToProps = state => {
  return {
    error: state.vehicles.error
  };
};
export default connect(mapStateToProps, { resetSelection })(Modal);
