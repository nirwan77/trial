import mongoose from "mongoose";

const PublishedPostsSchema = new mongoose.Schema(
  {
    story: {
      type: String,
    },
    url: {
      type: Array,
      unique: true,
    },
    userId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PublishedPosts ||
  mongoose.model("PublishedPosts", PublishedPostsSchema);
