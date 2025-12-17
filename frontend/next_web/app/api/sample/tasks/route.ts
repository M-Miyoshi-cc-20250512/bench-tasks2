import { NextResponse } from "next/server";

let tasks: { text: string; done: boolean }[] = [];

export async function POST(request: Request) {
    const data = await request.json();
    const newTask = { text: data.text, done: false };
    tasks.push(newTask);

    return NextResponse.json({
        message: "Task added successfully",
        task: newTask,
        allTasks: tasks,
    });
}

export async function DELETE(request: Request) {
    const data = await request.json();

    tasks = tasks.filter(task => task.text !== data.text);

    return NextResponse.json({
        message: "Task deleted successfully",
        allTasks: tasks,
    });
}

export async function PUT(request: Request) {
    const data = await request.json();

    tasks = tasks.map(task =>
        task.text === data.text
            ? { ...task, done: data.done }
            : task
    );

    return NextResponse.json({
        message: "Task updated successfully",
        allTasks: tasks,
    });
}