const mongoose = require("mongoose");
const modelFolder = require("./folder");
const modelFile =  require("./file");

// Esquema base para almacenamiento
const StorageBaseSchema = new mongoose.Schema(
  {
    kind: {
      type: String,
      required: true,
      enum: ['file', 'Folder'] // Definimos los tipos de subdocumentos
    },
  },
  {
    timestamps: true,
    versionKey: false,
    discriminatorKey: 'kind' // El campo que determinará el tipo de subdocumento
  }
);

// Esquema para almacenar archivos (StorageScheme)
const StorageScheme = StorageBaseSchema.discriminator("file",modelFile);

// Esquema principal (MainScheme) que también puede ser parte de storages
const FolderScheme = StorageBaseSchema.discriminator("Folder", modelFolder(StorageBaseSchema));


module.exports = StorageBaseSchema;
