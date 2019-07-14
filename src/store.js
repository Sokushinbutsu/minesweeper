const { toggleSquare, plantFlag } = require('./actions.js');
const { mineSweeper } = require('./reducers.js');
const { createStore } = require('redux');
const store = createStore(mineSweeper);

const unsubscribe = store.subscribe(() =>
  console.dir(JSON.stringify(store.getState()))
);

store.dispatch(toggleSquare(0, 0));
store.dispatch(plantFlag(0, 0));
