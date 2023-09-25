import React, { useEffect, useState } from "react";
import { ReactComponent as CheckboxChecked } from "../assets/true.svg";
import { ReactComponent as CheckboxUnchecked } from "../assets/false.svg";
import { fetchTasks, addTask } from "../apis/mystudyroom";

function Todaystask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [newTask]);

  const handleAddTask = async () => {
    try {
      await addTask(newTask);
      setNewTask("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-8">
      <div className="text-black font-noto-sans font-semibold text-xl leading-118">
        오늘의 과제
      </div>
      <div className="task-layout">
        {tasks.map((task, index) => (
          <div className="task-text" key={index}>
            <div className="task-title flex items-center">
              <div className="text-black font-noto-sans text-xl font-semibold leading-118 ">
                {task.topic}
              </div>
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
          class="mt-2 rounded-custom"
        />
        <button class="mt-2 ml-2" onClick={handleAddTask}>
          과제 추가
        </button>
      </div>
    </div>
  );
}

export default Todaystask;
