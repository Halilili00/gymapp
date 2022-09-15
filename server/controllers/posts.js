import PostMessage from "../models/postMessage.js"
import dotenv from 'dotenv'

dotenv.config();

export const getPosts = async (req, res) => {
    try {
        const postMessages =  await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.messages})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creatorId: req.userId, createdAt: new Date().toISOString()})

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getPostWithId = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    
    await PostMessage.findByIdAndRemove(id);

    res.json({message: "Post deleted succesfully!"});
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const post = req.body;
    
    await PostMessage.findByIdAndUpdate(id,post);

    res.json({message: "Post updated succesfully!"});
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if(!req.userId){
        return res.json({message: "Unautohticated"})
    }
    
    const post = await PostMessage.findById(id);

    const index = post.likeCount.findIndex((id) => id === String(req.userId));
    if(index === -1) {
        post.likeCount.push(req.userId);
    } else {
        post.likeCount = post.likeCount.filter((id) => id !== String(req.userId))
    }
    const updatePost = await PostMessage.findByIdAndUpdate(id, post)
}