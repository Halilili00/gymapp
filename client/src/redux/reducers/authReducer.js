import { AUTH, LOGOUT } from "../actions/actionsType";
import initialState from "./initialState";

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      if(action.data){
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action.data, errors: null};
      } else {
        return { ...state, authData: null, errors: action.error ? action.error : null};
      }
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, errors: null};
    default:
      return state;
  }
}
