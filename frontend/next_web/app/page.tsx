"use client";

import { useTodoStore } from "./_store/todoStore";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function Home() {
  // zustand から取る
  const tasks = useTodoStore((state) => state.tasks);
  const addTask = useTodoStore((state) => state.addTask);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);

  // 入力欄と API 表示用だけ useState
  const [text, setText] = useState("");
  const [apiMessage, setApiMessage] = useState("");

  const getApiMessage = async () => {
    const res = await axios.get("/api/sample/hello");
    setApiMessage(res.data.message);
  };

  return (
    <>
      <Head>
        <title>TODO List</title>
      </Head>

      <main>
        <h1>TODO List</h1>

        <button onClick={getApiMessage}>API表示</button>
        <p>{apiMessage}</p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            addTask(text);
            setText("");
          }}
        >
          追加
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.done ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>

              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />

              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}