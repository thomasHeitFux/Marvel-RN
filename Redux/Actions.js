import apiParams from "../config.js";
import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const url =
  "https://gateway.marvel.com/v1/public/characters?ts=1658609584379&apikey=4389b2712e4af592d7d260be9c1fa3ab&hash=a6a25a8c7b7f70acf1710ed2eac5ba09&limit=10";


export function getCharacters(name) {
  return async function (dispatch) {
    const response = name ? await axios(`${url}&nameStartsWith=${name}`) : await axios(url);
    dispatch({ type: GET_CHARACTERS, payload: response.data.data.results, })
  }
}

export function addFavorite(pj) {
  return async function (dispatch) {
    dispatch({ type: ADD_FAVORITE, payload: pj })
  }
}

export function removeFav(id) {
  return async function (dispatch) {
    dispatch({ type: REMOVE_FAVORITE, payload: id })
  }
}

// export function getCharacters(name) {
//   return function (dispatch) {
//     const { ts, apikey, hash, baseURL, offset, limit } = apiParams;
//     name
//       ? axios
//           .get(`${baseURL}/v1/public/characters`, {
//             params: {
//               ts,
//               apikey,
//               hash,
//               nameStartsWith: name,
//             },
//           })
//           .then((response) =>
//             dispatch({
//               type: GET_CHARACTERS,
//               payload: response.data.data.results,
//             })
//           )
//       : axios
//           .get(`${baseURL}/v1/public/characters`, {
//             params: {
//               ts,
//               apikey,
//               hash,
//               limit,
//               offset,
//             },
//           })
//           .then((response) =>
//             dispatch({
//               type: GET_CHARACTERS,
//               payload: response.data.data.results,
//             })
//           );
//   };
// }
