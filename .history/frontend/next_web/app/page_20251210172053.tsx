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
          // text を tasks の箱に追加する
          setTasks([...tasks, text]);
          // 入力欄を空に戻す
          setText("");
        }}
      >
        追加
      </button>

    </main>
  );
}