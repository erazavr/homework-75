import {CREATE_ENCODE_SUCCESS} from "../actions/encodeAction";

const initialState = {
    encode: []
};
const encodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ENCODE_SUCCESS:
            return {...state, encode: action.encode};
        default:
            return state
    }
};

export default encodeReducer;