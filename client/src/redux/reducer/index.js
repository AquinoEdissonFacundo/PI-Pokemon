import { GET_TYPES, GET_POKEMONS, CLEAN_DETAIL, ORDER_POKEMONS, FILTER_BY_TYPE, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME } from "../actions/index";

const initialState = {
  types: [],
  pokemons: [],
  detail: null,
  filteredPokemons: [],
  orderedPokemons: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES:
      console.log("GET TYPES");
      return { ...state, types: action.payload };

    case GET_POKEMONS:
      console.log("GET POKEMONS");
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_BY_ID:
      console.log("GET POKEMON BY ID");
      return { ...state, detail: action.payload };

    case GET_POKEMON_BY_NAME:
      console.log("GET POKEMON BY NAME");
      return { ...state, detail: action.payload };

    case CLEAN_DETAIL:
      console.log("CLEAN DETAIL");
      return { ...state, detail: null };

    case ORDER_POKEMONS:
      console.log("ORDER POKEMONS");
      return { ...state, orderedPokemons: action.payload };

    case FILTER_BY_TYPE:
      console.log("FILTER BY TYPE");
      return { ...state, filteredPokemons: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
