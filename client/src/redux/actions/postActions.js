import * as actions from "./actionsType.js"
import * as api from "../../api/index.js";

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.getPosts();

        dispatch({type: actions.GET_POSTS, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)

        dispatch({type: actions.CREATE_POST, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getPostWithId = (id) => async (dispatch) => {
    try {
        const {data} = await api.getPostWithId(id);

        dispatch({type: actions.GET_POST_WITH_ID, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}