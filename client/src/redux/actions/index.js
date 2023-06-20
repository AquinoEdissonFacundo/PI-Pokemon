import axios from "axios";

// export const getTypes = () => {
//     console.log("soy ese type");
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/pokemons/types`)
//             .then((response) => {
//                 dispatch({ type: GET_TYPES, payload: response.data });
//             })
//             .catch((error) => console.error(error.message));
//     };
// };
// 
export const getPokemons = () => {
  return async function(dispatch){
    const json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
        type: 'GET_POKEMONS',
        payload: json.data
    })
  }
  
};
export const CreatePokemons = (pokemon) => {
  return async function(dispatch) {
    const response = await axios.post('http://localhost:3001/pokemons/createPokemons', pokemon);
     return response;
  }
}

export function filterCreated(payload) {
  return {
    type: 'HANDLE_FILTER_CREATED',
    payload
  }
}
export function orderByName(payload){
  return{
    type: 'ORDER_BY_NAME',
    payload
  }
}

export function orderByAttack(payload) {
  return {
    type: 'ORDER_BY_ATTACK',
    payload
  };
}
export function filtertypes(payload){
 console.log(payload)
  return{
    type: 'FILTER_TYPES',
    payload
  }
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
      const pokemon = response.data;
      const payload = Array.isArray(pokemon) ? pokemon : [pokemon];

      return dispatch({
        type: 'GET_NAME_POKEMONS',
        payload: payload
      });
    } catch (error) {
      console.log(error);
    }
  };
}
// export const getPokemonsById = (id) => { 
//     console.log(GET_POKEMON_BY_ID);
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/pokemons/${id}`) 
//             .then((response) => {
//                 dispatch({ type: GET_POKEMON_BY_ID, payload: response.data });
//             })
//             .catch((error) => console.error(error.message));
//     };
// };

// export const getPokemonsByName = (name) => { 
//     console.log(GET_POKEMON_BY_NAME);
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/pokemons/nombre/${name}`) 
//             .then((response) => {
//                 dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data });
//             })
//             .catch((error) => console.error(error.message));
//     };
// };


// export const cleanDetail = (clean) => {
//     return { type: CLEAN_DETAIL,
// 	         payload: clean
// 	};
// };

// export const orderPokemons = (orden) => {
//     return { 
// 		type:ORDER_POKEMONS,
// 	    payload: orden             
// 	};
// };

// export const filterByType = (type) => {
//     return {
//       type: FILTER_BY_TYPE,
//       payload: { type }
//     };
//   };
  


