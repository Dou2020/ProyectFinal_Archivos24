const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
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
StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("folder", StorageScheme)