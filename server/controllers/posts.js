import PostMessage from "../models/postMessage.js";
import dotenv from "dotenv";

dotenv.config();

export const getPosts = async (req, res) => {
  const { sort } = req.params;
  try {
    let postMessages;
    switch (sort) {
      case "no":
        postMessages = await PostMessage.find({public: true});
        break;
      case "datenew":
        postMessages = await PostMessage.find({public: true}).sort({ createdAt: -1 });
        break;
      case "dateold":
        postMessages = await PostMessage.find({public: true}).sort({ createdAt: 1 });
        break;
      case "likeinc":
        postMessages = await PostMessage.aggregate([{ $addFields: {likeCount_count: {$size: {"$ifNull": ["$likeCount", []]}}}}, {$match: {public: true}} , {$sort: {"likeCount_count": 1}}])
        break;
      case "likedec":
        postMessages = await PostMessage.aggregate([{ $addFields: {likeCount_count: {$size: {"$ifNull": ["$likeCount", []]}}}}, {$match: {public: true}} , {$sort: {"likeCount_count": -1}}])
        break;
      default:
        break;
    }
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.messages });
  }
};

//haetaan posts jotka ovat public ja käyttäjän lisämät private postitkin
export const getAllPosts = async (req, res) => {
  const { id, sort} = req.params

  try {
    let postMessages
    switch (sort) {
      case "no":
        postMessages = await PostMessage.find({$or: [{ public: true }, { creatorId: id }]});
        break;
      case "datenew":
        postMessages = await PostMessage.find({$or: [{ public: true }, { creatorId: id }]}).sort({ createdAt: -1 });
        break;
      case "dateold":
        postMessages = await PostMessage.find({$or: [{ public: true }, { creatorId: id }]}).sort({ createdAt: 1 });
        break;
      case "likeinc":
        postMessages = await PostMessage.aggregate([{ $addFields: {likeCount_count: {$size: {"$ifNull": ["$likeCount", []]}}}}, {$match: {$or: [{ public: true }, { creatorId: id }]}} , {$sort: {"likeCount_count": 1}}])
        break;
      case "likedec":
        postMessages = await PostMessage.aggregate([{ $addFields: {likeCount_count: {$size: {"$ifNull": ["$likeCount", []]}}}}, {$match: {$or: [{ public: true }, { creatorId: id }]}} , {$sort: {"likeCount_count": -1}}])
        break;
      default:
        break;
    }
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.messages });
  }
};

export const getUserPosts = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.find({ creatorId: { $eq: id } });

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creatorId: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPostWithId = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted succesfully!" });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  await PostMessage.findByIdAndUpdate(id, post);

  res.json({ message: "Post updated succesfully!" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unautohticated" });
  }

  const post = await PostMessage.findById(id);

  const index = post.likeCount.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    post.likeCount.push(req.userId);
  } else {
    post.likeCount = post.likeCount.filter((id) => id !== String(req.userId));
  }
  const updatePost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.status(200).json(updatePost);
};
