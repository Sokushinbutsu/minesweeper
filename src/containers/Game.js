import { connect } from 'react-redux';
import { toggleSquare, plantFlag } from '../redux/actions.js';
import Board from '../components/Board.jsx';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onSquareClick: (x, y) => {
      dispatch(toggleSquare(x, y));
    },
    onSquareRightClick: (x, y) => {
      dispatch(plantFlag(x, y));
    }
  };
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Game;
