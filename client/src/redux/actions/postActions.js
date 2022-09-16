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

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: actions.DELETE_POST, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, updatedPost)

        dispatch({type: actions.UPDATE_POST, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async(dispatch) => {

    try {
        const {data} = await api.likePost(id);

        dispatch({type: actions.LIKE, payload:data})
    } catch (error) {
        console.log(error)
    }
}