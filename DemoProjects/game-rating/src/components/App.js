import React from "react";
import { connect } from "react-redux";
import { Observable } from "rxjs/Rx";
import { range, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

import { sortGamesByRating, randomlyRateGames } from "../actions";
import GameList from "./GameList";
import "./App.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sortButtonAscRef = React.createRef();
    this.sortButtonDescRef = React.createRef();
  }
  componentDidMount() {
    const { sortGamesByRating, randomlyRateGames } = this.props;
    Observable.fromEvent(this.sortButtonAscRef.current, "click").subscribe(() => {
      sortGamesByRating("ASC");
    });
    Observable.fromEvent(this.sortButtonDescRef.current, "click").subscribe(() => {
      sortGamesByRating("DESC");
    });

    range(1, 10)
      .pipe(concatMap(i => of(i).pipe(delay(1000 + Math.random() * 4000))))
      .subscribe(() => {
        randomlyRateGames();
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-text">Game Ratings</div>
        </div>
        <div className="App-content">
          <div className="list-buttons-container">
            <button className="header-button" ref={this.sortButtonAscRef} name="sortAscButton">
              Sort by Ratings (Ascending)
            </button>
            <button className="header-button" ref={this.sortButtonDescRef} name="sortDescButton">
              Sort by Ratings (Decending)
            </button>
          </div>
          <GameList />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    games: state.games
  };
};
export default connect(mapStateToProps, { sortGamesByRating, randomlyRateGames })(App);
