import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";
import ParticlesComponent from "./components/particleBg/particleBg";

const LOCAL_STORAGE_KEY = "todos:todoList";
function App() {
  const [tasks, setTasks] = useState([]);

  function prepareTask(taskTitle) {
    saveTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function saveTask(newTasks) {
    console.log(newTasks);
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }
  useEffect(() => {
    loadSavedTasks();
  }, []);

  function onDeleteTask(taskId) {
    const filteredTasks = tasks.filter((task) => task.id != taskId);
    saveTask(filteredTasks);
  }

  function onDeleteAllTask() {
    saveTask([]);
  }

  function onCompleteTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    saveTask(updatedTasks);
  }

  return (
    <>
      <ParticlesComponent />
      <Header addTasks={prepareTask} onDeleteAllTask={onDeleteAllTask}/>
      <Tasks tasks={tasks} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />
    </>
  );
}

export default App;
