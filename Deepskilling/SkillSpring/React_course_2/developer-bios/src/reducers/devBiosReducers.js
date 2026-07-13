import { createSlice } from "@reduxjs/toolkit";

export const ActionTypes = {
    GET_ALL_BIOS_REQUEST: 'getAllBiosRequest',
    GET_ALL_BIOS_SUCCESS: 'getAllBiosSuccess',
    GET_ALL_BIOS_ERROR: 'getAllBiosError',
    POST_BIO_REQUEST: 'postBioRequest',
    POST_BIO_RESPONSE: 'postBioResponse',
}
export const DEV_BIOS_SLICE_NAME = 'devBios';
export const POST_SUCCESS = 'postSuccess';

const devBiosSlice = createSlice({
    name: DEV_BIOS_SLICE_NAME,
    initialState: {
        developers: [],
        postResult: null,
        getResult: null
    },
    reducers: {
        [ActionTypes.GET_ALL_BIOS_REQUEST]: (state) => ({state}),
        [ActionTypes.GET_ALL_BIOS_SUCCESS]: (state, action) => ({
            ...state,
            developers: action.payload
        }),
        [ActionTypes.GET_ALL_BIOS_ERROR]: (state, action) => ({
            ...state,
            getResult: action.payload
        }),
        [ActionTypes.POST_BIO_REQUEST]: (state) => ({state}),
        [ActionTypes.POST_BIO_RESPONSE]: (state, action) => ({
            ...state,
            postResult: action.payload
        })
    }
});

export const { getAllBiosRequest, getAllBiosSuccess, getAllBiosError, postBioResponse, postBioRequest } = devBiosSlice.actions;
export default devBiosSlice.reducer;