import { AUTH, LOGOUT } from "../actions/actionsType";
import initialState from "./initialState";

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data};
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null};
    default:
      return state;
  }
}
