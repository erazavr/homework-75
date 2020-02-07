import axiosApi from "../../axiosApi";

export const CREATE_DECODE_SUCCESS = 'CREATE_DECODE_SUCCESS';

export const createDecodeSuccess = decode => ({type: CREATE_DECODE_SUCCESS, decode})

export const createDecode = decode => {
    return async (dispatch) => {
        const response = await axiosApi.post('/decode', decode);
        dispatch(createDecodeSuccess(response.data))
    }
};