const { Schema, model } = require("mongoose");
const { ModelSeries } = require("./Series.model");


const SchemaCategory = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

// ⚠️ Usa una función normal para que `this` funcione correctamente
SchemaCategory.pre("findOneAndDelete", async function (next) {
  try {
    const categoryBeingDeleted = await this.model.findOne(this.getFilter());
    if (categoryBeingDeleted) {
      await ModelSeries.deleteMany({ category: categoryBeingDeleted._id });
    }
    next();
  } catch (error) {
    next(error);
  }
});

const ModelCategory = model("categories", SchemaCategory);

module.exports = {
  ModelCategory
};
