"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [newsList, setNewsList] = useState<any[]>([]);

  // 画面が開いたときに一回だけ実行される処理
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/news/")
      .then(res => res.json())
      .then(data => setNewsList(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <h1>ニュース一覧</h1>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <a href={`/news/${news.id}`}>{news.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}