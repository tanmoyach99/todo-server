const mongoose = require("mongoose");

// const { objectId } = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: "String",
    },
    description: {
      type: "String",
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
