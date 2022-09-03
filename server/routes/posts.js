import express from "express";

import { getPosts, createPost, getPostWithId} from "../controllers/posts.js";

const router = express.Router();
router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', getPostWithId);

export default router;