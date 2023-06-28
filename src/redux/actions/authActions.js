import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api, apiUrl, endpoints, headers } from '../../utils/api'
import { LS } from '../../utils/localStorageUtils'
const signInAction = createAsyncThunk("signIn",async(datos) => {    
    try {
        let { data } = await api.post(apiUrl + endpoints.sign_in, datos)
        LS.add('token', data.token)
        return {
            success: data.success,
            token: data.token,
            user: data.user,
            message: data.message
        }
    } catch (error) {
        return{
            message:error.response.data.message,
            success:error.response.data.success
        }
        
    }
})
export { signInAction }