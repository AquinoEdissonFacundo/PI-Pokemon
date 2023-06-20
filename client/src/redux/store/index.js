import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);




// import { configureStore } from '@reduxjs/toolkit';
// import pokemonReducer from './pokemonSlice';

// const store = configureStore({
//   reducer: {
//     pokemon: pokemonReducer,
//   },
// });

// export default store;