import PostMessage from "../models/postMessage.js"

export const getPosts = (req, res) => {
    try {
        const postMessages =  PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.messages})
    }
}

export const createPost = (req, res) => {
    const post = res.body;
    const newPost = new PostMessage(post)

    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}