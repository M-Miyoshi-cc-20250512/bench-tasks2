import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "message from API",
    });
}

export async function POST() {
    return NextResponse.json({
        message: "added",
    });
}