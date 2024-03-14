import mongoose, { Schema } from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: "tests" },
    userId: {
      type: String,
      ref: "User",
    },
    comment: {
      type: String,
    },
    likes: [{ type: String, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.models.Comments ||
  mongoose.model("Comments", CommentsSchema);
