"use client";
import axios from "axios";
import React, { useState } from "react";

const InputForm = () => {
  const [Taskname, setTaskname] = useState("");
  const [TaskDesc, setTaskDesc] = useState("");

  const handleTasks = async () => {
    const response = await axios.post('/api/uploadTasks',{Taskname,TaskDesc})
    console.log(response.data)
  };
  return (
    <div className="flex">
      <label>Task Name : </label>
      <input
        value={Taskname}
        onChange={(e) => {
          setTaskname(e.target.value);
        }}
        className="mx-4 border-2 border-amber-50"
      ></input>
      <label>Task Description : </label>
      <textarea
        value={TaskDesc}
        onChange={(e) => {
          setTaskDesc(e.target.value);
        }}
        className="mx-4 border-amber-50 border-2"
      ></textarea>
      <button onClick={handleTasks} className="px-4 py-2 bg-blue-700 rounded-2xl border-amber-50 border-2 cursor-pointer">
        Create
      </button>
    </div>
  );
};

export default InputForm;
