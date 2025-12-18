import { create } from "zustand";

type Task = {
    text: string;
    done: boolean;
};

type TodoState = {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleTask: (index: number) => void;
    deleteTask: (index: number) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
    tasks: [],
    addTask: (text) =>
        set((state) => ({
            tasks: [...state.tasks, { text, done: false }],
        })),
    toggleTask: (index) =>
        set((state) => ({
            tasks: state.tasks.map((task, i) =>
                i === index ? { ...task, done: !task.done } : task
            ),
        })),
    deleteTask: (index) =>
        set((state) => ({
            tasks: state.tasks.filter((_, i) => i !== index),
        })),
}));