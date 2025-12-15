import { createSlice } from "@reduxjs/toolkit";

type Value = {
	value: number;
};

// 初期値設定
const initialState: Value = {
	value: 0,
};

// Slice作成
export const hogeSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = hogeSlice.actions;
export default hogeSlice.reducer;
