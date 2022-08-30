import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  public: Boolean,
  title: String,
  categories: [String],
  description: String,
  creator: String,
  exercises: [{
    exercise: String,
    reps: String,
    weight: Number
  }],
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
