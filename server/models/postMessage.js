import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  categories: [String],
  description: String,
  creaort: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
