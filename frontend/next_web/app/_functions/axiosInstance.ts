import axios from "axios";

// Axiosのインスタンスを作成
// frontend側(ブラウザ)から呼び出すNextjsで作成されたAPIのインスタンス
export const nextjsApi = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});

// backend側(Nodejs)から呼び出すPythonで作成されたAPIのインスタンス
export const pythonApi = axios.create({
	baseURL: process.env.PYTHON_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// SWR用のフェッチャー関数を定義
export const fetcher = (url: string) => nextjsApi.get(url).then((res) => res.data);
