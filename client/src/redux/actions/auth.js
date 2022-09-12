import * as actions from "./actionsType.js"
import * as api from "../../api/index.js";

export const signIn = (signData, navigate) => async(dispatch) => {
    try {
        const {data} = await api.signIn(signData);
        dispatch({type: actions.AUTH, data})
        
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (signData, navigate) => async(dispatch) => {
    try {
        const {data} = await api.signUp(signData);
        dispatch({type: actions.AUTH, data})

        navigate("/")
    } catch (error) {
        console.log(error)
    }
}

export const logout = () => {
    return {type: actions.LOGOUT}
}