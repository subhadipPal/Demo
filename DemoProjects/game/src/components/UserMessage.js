import React from "react";
import { connect } from "react-redux";
import user_unknown from "../assets/images/user_unknown.png";

class UserMessage extends React.Component {
  renderRow = message => {
    let { msgData } = message;
    return (
      <tr key={message.id}>
        <td>
          <img src={user_unknown} alt="img"></img>
          <p></p>
          {msgData.userId}
        </td>
        <td>
          <div className="message-row" key={message.id}>
            <div className="button-input user-input">{msgData.valueSelected}</div>
            <div className="calculation">{msgData.calculation}</div>
            <div className="result">{msgData.result}</div>
          </div>
        </td>
      </tr>
    );
  };

  render() {
    var { game } = this.props;
    if (game) {
      console.log(game);
      if (game.reset) {
        return "";
      }
      return (
        <table style={{ width: "100%" }}>
          <tbody ref="tableContent">{game.messages.map(this.renderRow)}</tbody>
        </table>
      );
    } else {
      return "Loading...";
    }
  }
}
const mapStateToProps = state => {
  return {
    game: state.game
  };
};

export default connect(mapStateToProps)(UserMessage);
