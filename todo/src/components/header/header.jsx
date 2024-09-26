import React, { useState } from "react";
import Styles from "./header.module.css";

function Header({ addTasks, onDeleteAllTask }) {
  const [title, setTitle] = useState("");

  function checkSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") {
      return null;
    } else {
      addTasks(title);
      setTitle("");
    }
  }
  function onChangeInput(e) {
    setTitle(e.target.value);
  }

  function clearInput() {
    setTitle("");
  }

  return (
    <header className={Styles.header}>
      <h1>Task Tracker</h1>
      <form onSubmit={checkSubmit} className={Styles.newTaskForm}>
        <input type="text" placeholder="Add a new task..." value={title} onChange={onChangeInput} />
        <button type="submit">Add</button>
        <button type="reset" onClick={clearInput}>
          Clear
        </button>
        <button className={Styles.delBtn} onClick={ onDeleteAllTask }>
          Delete all
        </button>
      </form>
    </header>
  );
}

export default Header;
