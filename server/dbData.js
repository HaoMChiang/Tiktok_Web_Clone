import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  description: String,
  likes: Number,
  shares: Number,
  messages: Number,
});

export default mongoose.model("tiktokVideos", DataSchema);
