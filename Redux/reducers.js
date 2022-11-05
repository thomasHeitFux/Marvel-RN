import { GET_CHARACTERS, ADD_FAVORITE,REMOVE_FAVORITE } from "./Actions";

const initialState = {
    characters: [],
    favorites: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        //TODOS
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case ADD_FAVORITE:
        
            return {
                ...state,
                favorites:[...state.favorites, action.payload]
            }

            case REMOVE_FAVORITE:
            const filtered =state.favorites.filter(e=>{e.id!==action.payload})
            return {
                ...state,
                favorites: filtered
            }

        default: return state
    }
}
export default userReducer;