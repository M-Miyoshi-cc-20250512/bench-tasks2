"use client";
import { useState } from "react";

export const metadata = {
  title: "TODOリスト",
};

export default function Home() {
  const [text, setText] = useState("");

  return (
    <main>
      <h1>TODOリスト</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>追加</button>

      <p>{text}</p>
    </main>
  );
}