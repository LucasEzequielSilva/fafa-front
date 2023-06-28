import { createReducer } from "@reduxjs/toolkit";
import { signInAction } from "../actions/authActions";

const initialState = {
    user: null,
    token: null,
    success:null,
    message:null
}
const reducer = createReducer(initialState,
    (builder)=>builder
    .addCase(
        signInAction.fulfilled,
        (state, action)=>{
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                success: action.payload.success,
                message: action.payload.message
            }
        }
    ))
export default reducer