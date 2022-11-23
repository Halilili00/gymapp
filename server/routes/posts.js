import express from "express";

import { getPosts, createPost, getPostWithId, deletePost, updatePost, likePost, getUserPosts, getAllPosts} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get('/:sort', getPosts);
router.get('/:id/post', getPostWithId);
router.get('/:id/userProfile',auth, getUserPosts);
router.get('/:id/:sort/allPosts',auth, getAllPosts);
router.post('/', auth ,createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

export default router;