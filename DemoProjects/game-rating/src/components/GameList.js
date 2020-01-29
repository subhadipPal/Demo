import React from "react";
import { connect } from "react-redux";
import { fetchGameList } from "../actions";
import RatingForm from "./form/RatingForm";

class GameList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchGameList();
  }
  renderGameGrid = game => {
    return (
      <div className="grid-item" key={game.id}>
        <div className="game-icon"></div>
        <div className="game-title">{game.title}</div>
        <div className="game-rating">
          <RatingForm
            fieldName="ratingDropdown"
            fieldLabel="Rating"
            fieldValue={game.rating}
            fieldItems={this.props.games}
          />
        </div>
      </div>
    );
  };

  render() {
    var { games } = this.props;
    if (games) {
      return (
        <div>
          <div className="games-grid">{games.map(this.renderGameGrid)}</div>
        </div>
      );
    } else return "Loading...";
  }
}

const mapStateToProps = state => {
  return {
    games: state.games.games
  };
};
export default connect(mapStateToProps, { fetchGameList })(GameList);
