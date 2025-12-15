"use client";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <>
      <Head>
        <title>TODO List</title>
      </Head>

      <main>
        <h1>TODOリスト</h1>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={() => {
            setTasks([...tasks, text]);
            setText("");
          }}
        >
          追加
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </main>
    </>
  );
}