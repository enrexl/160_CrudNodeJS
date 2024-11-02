const express = require("express");
const router = express.Router();

let todos = [
  {
    id: 1,
    task: "Belajar Node.JS",
    completed: false,
  },
  {
    id: 2,
    task: "Membuat API",
    completed: false,
  },
  {
    id: 3,
    task: "Membuat API",
    completed: false,
    priority: "Medium",
    dueDate: "2024-12-05",
  },
];

// Endpoint untuk mendapatkan data todos
router.get("/", (req, res) => {
  res.json(todos);
});

router.post("/", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
    comments: "Check for discount",
    priority: "High",
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.get("/new-object", (req, res) => {
  res.json(newObject);
});

router.delete("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    // Remove the todo from the array
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: "Todo ndak ketemu." });
  }
});

router.put("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  todo.task = req.body.task || todo.task;

  res.status(200).json({
    message: `Tugas ${todo.id} telah diupdate`,
    updatedTodo: todo,
  });
});

module.exports = router;
