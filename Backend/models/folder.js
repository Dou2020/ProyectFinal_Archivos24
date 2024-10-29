const mongoose = require("mongoose");
//const StorageBaseSchema = require("./storage");

function Schema(StorageBaseSchema) {
  const StorageScheme = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      // Incluye subdocumentos de tipo Storage dentro de Main
      storage: [StorageBaseSchema], // Array que puede contener StorageScheme o MainScheme
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  return StorageScheme;  
}


module.exports = Schema;