"use client";
import { useState } from "react";

const [tasks, setTasks] = useState<string[]>([]);

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main>
      <h1>TODO List</h1>

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
  );
}