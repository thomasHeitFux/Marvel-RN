import { GET_CHARACTERS } from "./Actions";

const initialState = {
    characters: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        //TODOS
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
            default: return state
    }
}
export default userReducer;