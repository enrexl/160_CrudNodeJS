const express = require("express");
const app = express();
const todoRoutes = require("./route/todo.js");
const port = 3000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port, () => {
  console.log(`Server Run at http://localhost:${port}/`);
});
