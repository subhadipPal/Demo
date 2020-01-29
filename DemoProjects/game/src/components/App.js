import React from "react";
import { connect } from "react-redux";

import "./App.css";
import MyInput from "./MyInput";
import UserMessage from "./UserMessage";
import { updateInterface } from "../actions";
import { database } from "../firebase";
import Modal from "./Modal";

class App extends React.Component {
  componentDidMount() {
    const messagesRef = database
      .ref("messages")
      .orderByKey()
      .limitToLast(100);

    messagesRef.on("child_added", snapshot => {
      const message = { msgData: snapshot.val(), id: snapshot.key };
      this.props.updateInterface(message);
    });
  }

  render() {
    var { game } = this.props;
    return (
      <div className="App">
        <div className="App-header">Game (Player:{game.user})</div>
        <div className="mainbody">
          <div className="content">
            <UserMessage></UserMessage>
          </div>
        </div>
        <div className="footer">
          <MyInput></MyInput>
        </div>
        <Modal></Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    game: state.game
  };
};
export default connect(mapStateToProps, { updateInterface })(App);
