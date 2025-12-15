"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]); Ï
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
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(index)}
              />

              <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                {task.text}
              </span>

              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}