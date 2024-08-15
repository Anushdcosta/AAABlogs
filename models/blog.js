const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const blogschema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Data: {
      type: String,
      required: true,
    },
    blog_id: {
      type: String,
      required:true
    },
    available: {
      type: String,
      required:true
    }
  },
);

const Blog = mongoose.model("blogs", blogschema);
module.exports = Blog;
