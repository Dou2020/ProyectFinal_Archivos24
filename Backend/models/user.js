const mongoose = require("mongoose");
const StorageBaseSchema = require("./storage")

// Esquema para el modelo principal que contendrá un array de diferentes tipos
const storageMain = new mongoose.Schema(
    {
      name: {
        type: String ,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
          type: ["user","admin"],
          default:"user",
      },
      storage: [StorageBaseSchema], // carpeta private
      share: [StorageBaseSchema], // archivos compartidos
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  module.exports = mongoose.model("user", storageMain);