import {CREATE_DECODE_SUCCESS} from "../actions/decodedAction";

const initialState = {
    decode: []
};

const decodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DECODE_SUCCESS:
            return {...state, decode: action.decode};
        default:
            return state
    }
};

export default decodeReducer