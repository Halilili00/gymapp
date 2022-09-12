import express from "express";

import { getPosts, createPost, getPostWithId, deletePost, updatePost} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.get('/', getPosts)
router.post('/', auth ,createPost)
router.get('/:id', getPostWithId);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost)

export default router;