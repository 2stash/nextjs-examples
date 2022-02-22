import { LOGIN, LOGOUT } from "../constants"

export const authLogin = () => async (dispatch) => {
    try {
        dispatch({type:LOGIN})
    } catch (error) {
        
    }
}

export const authLogout = () => async (dispatch) => {
    try {
        dispatch({type:LOGOUT})
    } catch (error) {
        
    }
}