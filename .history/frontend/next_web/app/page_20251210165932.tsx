"use client";
import { useState } from "react";

export const metadata = {
  title: "TODOリスト",
};

export default function Home() {
  const [text, setText] = useState("");
  return (
    <main>
      <h1>TODO List</h1>

      <input type="text" />
      <button>追加</button>
    </main>
  );
}