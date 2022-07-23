import apiParams from '../config.js';
import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS'
const url= "https://gateway.marvel.com/v1/public/characters?ts=1658609584379&apikey=4389b2712e4af592d7d260be9c1fa3ab&hash=a6a25a8c7b7f70acf1710ed2eac5ba09&limit=10&offset="

export function getCharacters(name) {
    return function(dispatch){
        const { ts, apikey, hash, baseURL,offset,limit } = apiParams;
        name?
        axios.get(`${baseURL}/v1/public/characters`, {
            params: {
                ts,
                apikey,
                hash,
                nameStartsWith: name,
                // limit:10,
                // offset:10
            }
        })
        // .then(res=>console.log(res.data.data.results))
            .then((response) => dispatch({
                type:GET_CHARACTERS,
                payload:response.data.data.results}))
                
         :       
                axios.get(`${baseURL}/v1/public/characters`, {
                    params: {
                        ts,
                        apikey,
                        hash,
                        limit,
                        offset
                    }
                })
                // .then(res=>console.log(res.data.data.results))
                .then((response) => dispatch({
                    type:GET_CHARACTERS,
                    payload:response.data.data.results}))
                }
                
            }
        