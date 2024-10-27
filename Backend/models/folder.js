const mongoose = require("mongoose");


const StorageScheme = new mongoose.Schema(
  {
    foldername: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("folder", StorageScheme)