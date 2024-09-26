import React from "react";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import Styles from "./tasks.module.css";

function Tasks({ tasks, onCompleteTask, onDeleteTask }) {
  const totalTask = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={Styles.tasks}>
      <div className={Styles.header_count}>
        <div>
          <p>Total task</p>
          <span>{totalTask}</span>
        </div>
        <div>
          <p className={Styles.completed}>Completed task</p>
          <span>
            {completedTasks} of {totalTask}
          </span>
        </div>
      </div>

      {totalTask === 0 ? (
        <p className={Styles.noTasksContainer}>No tasks found</p>
      ) : (
        <div className={Styles.list}>
          {tasks.map((task) => (
            <div key={task.id} className={Styles.task}>
              <button onClick={() => onCompleteTask(task.id)} className={Styles.checkContainer}>
                {task.isCompleted ? <AiFillCheckCircle /> : <div />}
              </button>
              <p className={task.isCompleted ? Styles.taskCompleted : Styles.notTaskCompleted}>
                {task.title}
              </p>
              <button className={Styles.delBtn} onClick={() => onDeleteTask(task.id)}>
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Tasks;