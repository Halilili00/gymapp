import { GET_POSTS, CREATE_POST, GET_POST_WITH_ID } from "../actions/actionsType";
import initialState from "./initialState";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {posts: action.payload, post: initialState.post}
    case CREATE_POST:
      return {posts: [...state.posts, action.payload]};
    case GET_POST_WITH_ID:
      return {post: action.payload, posts: initialState.posts}
    default:
      return state;
  }
}
