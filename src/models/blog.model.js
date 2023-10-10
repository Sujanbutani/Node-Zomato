const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    author_name: {
        type: String,
        trim: true,
    },
    tag: {
        type: String,
        trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;