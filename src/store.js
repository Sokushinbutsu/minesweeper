const { generateBoard, toggleSquare, plantFlag } = require('./actions.js');
const { mineSweeper } = require('./reducers.js');
const { createStore } = require('redux');
const store = createStore(mineSweeper);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(generateBoard);
