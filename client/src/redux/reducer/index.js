const initialState = {
  characters: [],
  allCharacters:[],
  filteredCharacters:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
      case 'FILTER_TYPES':
        const allCharacters = state.allCharacters;
        const typeFilter = action.payload === 'all' ? allCharacters : allCharacters.filter(el => el.type.includes(action.payload));
        return {
          ...state,
          filteredCharacters: typeFilter
        };
      
    case 'ORDER_BY_NAME':
      let sortedArrByName = action.payload === 'asc' ?
        state.characters.slice().sort(function(a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        }) :
        state.characters.slice().sort(function(a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      return {
        ...state,
        characters: sortedArrByName
      };
    case 'ORDER_BY_ATTACK':
      let sortedArrByAttack = action.payload === 'asc' ?
        state.characters.slice().sort(function(a, b) {
          return a.attack - b.attack;
        }) :
        state.characters.slice().sort(function(a, b) {
          return b.attack - a.attack;
        });
      return {
        ...state,
        characters: sortedArrByAttack
      };
      case 'GET_NAME_POKEMONS':
        return {
          ...state,
          filteredCharacters: Array.isArray(action.payload) ? action.payload : []
        };
      case 'CREATEPOKEMONS':
        return {
          ...state
        }
    case 'HANDLE_FILTER_CREATED':
      const createdFilter = action.payload === 'created' ? state.allCharacters.filter(el => el.createdIndDb === true) : state.allCharacters.filter(el => !el.createdIndDb);
      return {
        ...state,
        characters: action.payload === 'all' ? state.allCharacters : createdFilter
      };
        default:
      return state;
  }
}


export default rootReducer;
