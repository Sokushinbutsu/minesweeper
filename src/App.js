import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.jsx';
import Game from './containers/Game.js';

class App extends Component {
  render() {
    return (
      <>
        <Game />
      </>
    );
  }
}

// const App = props => {
//   return <Board />;
// };

export default App;
