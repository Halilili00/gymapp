import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  public: Boolean,
  title: {type: String, required: true},
  category: {type: String, required: true},
  description: String,
  creator: {type: String, required: true},
  creatorId: String,
  selectedFile: String,
  exercises: [{
    exercise: String,
    reps: String,
    weight: Number
  }],
  likeCount: {
    type: [String],
    default: [],
  },
  createdAt: Date,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
