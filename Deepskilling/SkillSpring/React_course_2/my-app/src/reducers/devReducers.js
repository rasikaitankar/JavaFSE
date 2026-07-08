import { handleAction, handleActions } from "redux-actions"

export const Types = {
    GET_ALL_BIOS:'GET_ALL_BIOS'
}

const devActions = {
    getAllBiosActionCreator: (developers) => ({
        type:Types.GET_ALL_BIOS,
        developers
    }),
    reducer: handleActions({
        [Types.GET_ALL_BIOS]:(state,action) => ({
            ...state,
            developers: action.developers
        })
    },{
        developers:[]
    })
}
export default devActions;