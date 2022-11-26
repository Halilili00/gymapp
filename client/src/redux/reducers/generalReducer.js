import { ENDLOADING, STARTLOADING } from "../actions/actionsType";
import initialState from "./initialState";

export default function generalReducer(state = initialState, action){
    switch (action.type) {
        case STARTLOADING:
            return {...state, isLoading: true}
        case ENDLOADING:
            return {...state, isLoading: false}
        default:
            return state;
    }
}