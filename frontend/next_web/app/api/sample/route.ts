import { nextjsApi } from "@/_functions/axiosInstance";

// GET
export async function GET() {
	try {
		const res = await nextjsApi.get(`http://api:8000/api/v1/drf`);
		// const res = await nextjsApi.get(`https://jsonplaceholder.typicode.com/posts`);
		return Response.json({ data: res.data });
	} catch (error) {
		console.log(error);
	}
}

// POST
export async function POST(request: Request) {
	const res = await request.json();
	try {
		const response = await nextjsApi.post("https://jsonplaceholder.typicode.com/posts", res);
		return Response.json({ data: response.data });
	} catch (error) {
		console.log(error);
	}
}
