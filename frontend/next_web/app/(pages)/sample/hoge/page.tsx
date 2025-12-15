"use client";
import { Sample } from "@/_components/Sample";
import { fetcher } from "@/_functions/axiosInstance";
import { decrement, increment, incrementByAmount } from "@/_store/features/sample/hogeSlice";
import { useAppDispatch, useAppSelector } from "@/_store/hooks";
import { useState } from "react";
import useSWR from "swr";

const Page = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector((state: { hoge: { value: number } }) => state.hoge.value);
	const { data } = useSWR("/api/sample", fetcher);
	console.log(data);

	const [incrementAmount, setIncrementAmount] = useState("2");
	return (
		<>
			<Sample />
			{/* ReduxToolkit関連 */}
			<button aria-label="Increment value" onClick={() => dispatch(increment())}>
				+1
			</button>
			<br />
			<span>{count}</span>
			<br />
			<button onClick={() => dispatch(decrement())}>-1</button>
			<br />
			<input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
			<button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
				追加
			</button>
		</>
	);
};

export default Page;
