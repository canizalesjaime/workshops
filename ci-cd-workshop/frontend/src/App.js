import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [schedule, setSchedule] = useState([]);
  const [todos, setTodos] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  useEffect(() => {
    fetchSchedule();
    fetchTodos();
  }, []);

  const fetchSchedule = async () => {
    const response = await axios.get(`${API_URL}api/schedule`);
    setSchedule(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get(`${API_URL}api/todos`);
    setTodos(response.data);
  };

  const addEvent = async () => {
    await axios.post(`${API_URL}api/schedule`, { event: newEvent });
    fetchSchedule();
  };

  const addTask = async () => {
    await axios.post(`${API_URL}api/todos`, {
      task: newTask,
      dueDate: newDueDate,
    });
    fetchTodos();
  };

  const deleteTask = async (task) => {
    await axios.delete(`${API_URL}api/todos/${task}`);
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>PUDDING</h1>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="<day>, <time>, <event>"
      />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            {item.day} - {item.time}: {item.event}
          </li>
        ))}
      </ul>

      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <input
        type="date"
        value={newDueDate}
        onChange={(e) => setNewDueDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.task} - Due: {item.due_date}{" "}
            <button onClick={() => deleteTask(item.task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
