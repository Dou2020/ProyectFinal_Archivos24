const mongoose = require("mongoose");

const fileScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = fileScheme