import express from "express";

import { getPosts, createPost, getPostWithId, deletePost, updatePost, likePost} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get('/', getPosts)
router.post('/', auth ,createPost)
router.get('/:id', getPostWithId);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

export default router;