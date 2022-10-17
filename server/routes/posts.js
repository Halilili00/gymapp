import express from "express";

import { getPosts, createPost, getPostWithId, deletePost, updatePost, likePost, getUserPosts} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get('/', getPosts);
router.get('/:id', getPostWithId);
router.get('/:id/userProfile', getUserPosts);
router.post('/', auth ,createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

export default router;