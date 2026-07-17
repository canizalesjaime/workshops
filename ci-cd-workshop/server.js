const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
console.log(PORT);

// Middleware
app.use(bodyParser.json());


// hosted 
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
// app.use(cors({
//   origin: 'https://app-frontend1-fdc38c7b3d87.herokuapp.com',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));


// local
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
app.use(cors());

console.log(process.env.DATABASE_URL);

// Helper function to execute queries
const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res.rows;
};

// Routes

// Get the weekly schedule
app.get("/api/schedule", async (req, res) => {
  try {
    const schedule = await query("SELECT * FROM schedule");
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
});

// Add an event to the weekly schedule
app.post("/api/schedule", async (req, res) => {
  let event  = req.body.event;
  event=event.trim();
  let arr=event.split(",");
  event=arr[2];
  let day = arr[0], time=arr[1];
  if (!day || !time || !event) {
    return res.status(400).json({ error: "Day, time, and event are required" });
  }

  try {
    await query("INSERT INTO schedule (day, time, event) VALUES ($1, $2, $3)", [
      day,
      time,
      event,
    ]);
    res.status(201).json({ message: "Event added to schedule" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add event" });
  }
});

// Get the to-do list
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await query("SELECT * FROM todos");
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch to-do list" });
  }
});

// Add a task to the to-do list
app.post("/api/todos", async (req, res) => {
  const { task, dueDate } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  try {
    await query("INSERT INTO todos (task, due_date) VALUES ($1, $2)", [
      task,
      dueDate || "No due date",
    ]);
    res.status(201).json({ message: "Task added to to-do list" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
});

// Delete a task from the to-do list
app.delete("/api/todos/:task", async (req, res) => {
  const taskToDelete = req.params.task;
  try {
    const result = await query("DELETE FROM todos WHERE task = $1", [taskToDelete]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

// External data route (example)
app.get("/api/external", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
