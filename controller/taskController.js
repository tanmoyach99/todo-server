const Task = require("../model/task");

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const createdTask = await new Task({
      task: req.body.task,
      description: req.body.desc,
      status: req.body.status || "Not Completed",
    }).save();

    console.log(createdTask);
    res.json(createdTask);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create task failed");
  }
};

exports.list = async (req, res) => {
  const taskList = await Task.find({}).sort({ createdAt: -1 }).exec();
  res.json(taskList);
};

exports.read = async (req, res) => {
  console.log(req.params.id);
  let individualTask = await Task.findOne({ id: req.params.id }).exec();
  res.json(individualTask);
};

exports.update = async (req, res) => {
  console.log(req.body.desc);
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params._id },
      {
        task: req.body.task,
        description: req.body.desc,
      },
      { new: true }
    );
    console.log(updated);
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("update failed");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params._id });

    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).send("create delete failed");
  }
};
