import mineSweeper from './reducers.js';
import { createStore } from 'redux';

const store = createStore(
  mineSweeper,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.dir(JSON.stringify(store.getState())));

export default store;
