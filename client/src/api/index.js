import axios from "axios"

const API = axios.create({baseURL: 'https://fitnessblog-server.herokuapp.com'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getPosts = (sort) => API.get(`/posts/${sort}`);
export const getUserPostWithId = (id) => API.get(`/posts/${id}/userProfile`);
export const getAllPosts = (id,sort) => API.get(`/posts/${id}/${sort}/allPosts`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const getPostWithId = (id) => API.get(`/posts/${id}/post`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (signData) => API.post('/user/signin', signData);
export const signUp = (signData) => API.post('/user/signup', signData);