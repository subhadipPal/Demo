import React from "react";
import { connect } from "react-redux";

import { database } from "../firebase";

class MyInput extends React.Component {
  handleButtonClick = e => {
    e.preventDefault();
    var { game } = this.props;
    var { messages } = game;

    let { innerText: selectedValue } = e.target;
    let oldValue = messages[messages.length - 1].msgData.result;

    let result = Math.ceil((parseInt(selectedValue) + parseInt(oldValue)) / 3);

    database.ref("messages").push({
      userId: game.user,
      valueSelected: selectedValue,
      calculation: `[(${selectedValue}+ ${oldValue})/3]=${result}`,
      result
    });
  };
  render() {
    return (
      <div>
        <div className="button-input" onClick={this.handleButtonClick}>
          +1
        </div>
        <div className="button-input" onClick={this.handleButtonClick}>
          0
        </div>
        <div className="button-input" onClick={this.handleButtonClick}>
          -1
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    game: state.game
  };
};
export default connect(mapStateToProps)(MyInput);
