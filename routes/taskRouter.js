const express = require("express");

const taskRouter = express.Router();

const {
  create,
  list,
  read,
  update,
  remove,
} = require("../controller/taskController");

taskRouter.post("/task", create);
taskRouter.get("/tasks", list);
taskRouter.get("/task/:_id", read);
taskRouter.put("/task/:_id", update);

taskRouter.delete("/task/:_id", remove);

module.exports = taskRouter;
