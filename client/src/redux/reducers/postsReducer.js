import { GET_POSTS, CREATE_POST } from "../actions/actionsType";
import initialState from "./initialState";

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
