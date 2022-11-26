import * as actions from "./actionsType.js"
import * as api from "../../api/index.js";
import jwt_decode from "jwt-decode";

export const signIn = (signData, navigate) => async(dispatch) => {
    try {
        dispatch({ type: actions.STARTLOADING})
        const {data} = await api.signIn(signData);
        dispatch({type: actions.AUTH, data})
        dispatch({ type: actions.ENDLOADING})
        navigate("/")
    } catch (error) {
        console.log(error)
        dispatch({ type: actions.AUTH, error})
        dispatch({ type: actions.ENDLOADING})
    }
}

export const googleAuth = (res, navigate) => async(dispatch) => {
    try {
        const decoded = jwt_decode(res.credential);
        dispatch({type: actions.AUTH, data: {result: {name: decoded.given_name+ " " + decoded.family_name , email: decoded.email, _id: decoded.sub, imageUrl: decoded.picture}, token: res.credential}})
        navigate("/");
    } catch (error) {
        console.log(error)
        dispatch({ type: actions.AUTH, error})
    }
}

export const signUp = (signData, navigate) => async(dispatch) => {
    try {
        dispatch({ type: actions.STARTLOADING})
        const {data} = await api.signUp(signData);
        dispatch({type: actions.AUTH, data})
        dispatch({ type: actions.ENDLOADING})
        navigate("/")
    } catch (error) {
        console.log(error)
        dispatch({ type: actions.AUTH, error})
        dispatch({ type: actions.ENDLOADING})
    }
}

export const logout = () => {
    return {type: actions.LOGOUT}
}