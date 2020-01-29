import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { addUser, startNewGame } from "../actions";
import { database } from "../firebase";

class Modal extends React.Component {
  state = { user: "" };

  addUser(event) {
    event.preventDefault();
    var { user } = this.state;
    if (user) {
      this.props.addUser(user);
      var { game } = this.props;
      if (game.messages.length === 0) {
        var randomNum = Math.ceil(Math.random() * 100);
        database.ref("messages").push({
          userId: user,
          valueSelected: randomNum,
          calculation: `${randomNum}`,
          result: randomNum
        });
      }
    }
  }
  newGame(event) {
    event.preventDefault();
    var { user } = this.state;
    var databaserRef = database.ref("messages");
    var props = this.props;
    databaserRef.remove().then(function() {
      console.log("Remove success: ");
      props.startNewGame();

      var randomNum = Math.ceil(Math.random() * 100);
      databaserRef.push({
        userId: user,
        valueSelected: randomNum,
        calculation: `${randomNum}`,
        result: randomNum
      });
    });
  }
  resetGame(event) {
    event.preventDefault();
    var databaserRef = database.ref("messages");
    var props = this.props;
    databaserRef.remove().then(function() {
      console.log("Remove success: ");
      props.startNewGame();
    });
  }
  render() {
    var { user, winner } = this.props.game;
    if (!user) {
      return ReactDOM.createPortal(
        <div className="modalOuter">
          <div onClick={event => event.stopPropagation()} className="modalInner">
            <div className="header">Enter Username</div>
            <div className="content">
              <form onSubmit={this.onAddMessage}>
                <input
                  type="text"
                  ref={node => (this.input = node)}
                  onChange={e => this.setState({ user: e.target.value })}
                />
                <p></p>
                <button className="start" onClick={e => this.addUser(e)}>
                  Start the game
                </button>
                <button className="reset" onClick={e => this.resetGame(e)}>
                  Reset the game
                </button>
              </form>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      );
    } else if (winner) {
      return ReactDOM.createPortal(
        <div className="modalOuter">
          <div onClick={event => event.stopPropagation()} className="modalInner">
            <div className="content">
              The winner is {winner} :)
              <p></p>
              <button className="start" onClick={e => this.newGame(e)}>
                Start a new game
              </button>
            </div>
          </div>
        </div>,
        document.querySelector("#modal2")
      );
    } else {
      return "";
    }
  }
}
const mapStateToProps = state => {
  return {
    game: state.game
  };
};
export default connect(mapStateToProps, { addUser, startNewGame })(Modal);
