import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as CheckboxChecked } from "../assets/true.svg";
import { ReactComponent as CheckboxUnchecked } from "../assets/false.svg";

function Todaystask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "http://54.180.142.251:8080/api/homework"
      );
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    try {
      await axios.post("http://54.180.142.251:8080/api/homework", {
        topic: newTask,
      });
      setNewTask("");
      handleClick();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>불러오기</button>
      <div className="pl-4 text-lg">오늘의 과제</div>
      <div className="task-layout">
        {tasks.map((task, index) => (
          <div className="task-text" key={index}>
            <div className="task-title flex items-center">
              <div className="text-lg">{task.topic}</div>
              <div className="text-base">{task.checkBox}</div>
            </div>
            {task.checkBox ? <CheckboxChecked /> : <CheckboxUnchecked />}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>과제 추가</button>
      </div>
    </div>
  );
}

export default Todaystask;
