import { combineReducers } from "redux";

import postsReducer from "./postsReducer.js" 
import authReducer from "./authReducer.js";
import generalReducer from "./generalReducer.js"

export default combineReducers({
    postsReducer,
    authReducer,
    generalReducer,
})