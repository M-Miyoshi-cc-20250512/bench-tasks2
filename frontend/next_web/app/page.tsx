"use client";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [apiMessage, setApiMessage] = useState("");

  const getApiMessage = async () => {
    const res = await axios.get("/api/sample/hello");
    setApiMessage(res.data.message);
  };

  const toggleDone = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Head>
        <title>TODO List</title>
      </Head>

      <main>
        <h1>TODO List</h1>

        <button onClick={getApiMessage}>
          API表示
        </button>

        <p>{apiMessage}</p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            setTasks([...tasks, { text: text, done: false }]);
            setText("");
          }}
        >
          追加
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>

              <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                {task.text}
              </span>

              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(index)}
              />

              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}