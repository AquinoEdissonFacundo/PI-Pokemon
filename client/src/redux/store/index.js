import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const composeEnhancers =
	(typeof window !== "undefined" &&
		window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;









// import { configureStore } from '@reduxjs/toolkit';
// import pokemonReducer from './pokemonSlice';

// const store = configureStore({
//   reducer: {
//     pokemon: pokemonReducer,
//   },
// });

// export default store;