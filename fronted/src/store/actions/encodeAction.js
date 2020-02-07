import axiosApi from "../../axiosApi";

export const CREATE_ENCODE_SUCCESS = 'CREATE_ENCODE_SUCCESS';

export const creatEncodeSuccess = encode => ({type: CREATE_ENCODE_SUCCESS, encode});

export const createEncode = encode => {
    return async (dispatch) => {
        const response = await axiosApi.post('/encode', encode);
        dispatch(creatEncodeSuccess(response.data));
    }
};