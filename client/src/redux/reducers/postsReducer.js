import { GET_POSTS, CREATE_POST, GET_POST_WITH_ID, DELETE_POST, UPDATE_POST, LIKE, GET_USER_POSTS } from "../actions/actionsType";
import initialState from "./initialState";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {posts: action.payload, post: initialState.post}
    case GET_USER_POSTS:
      return {posts: action.payload, post: initialState.post}
    case CREATE_POST:
      return {posts: [...state.posts, action.payload]};
    case GET_POST_WITH_ID:
      return {post: action.payload, posts: initialState.posts}
    case DELETE_POST:
      return {posts: state.posts.filter((post) => post._id !== action.payload), post: initialState.post};
    case UPDATE_POST:
      return {posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post), post: action.payload}
    case LIKE:
      return {posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post), post: initialState.post}
    default:
      return state;
  }
}
