// Create a store function and export it
// This function will be called from store / index.js
import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
  const store = createStore(modules);
  return store;
}

export default configure;
