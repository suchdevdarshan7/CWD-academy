import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json([{ id: 1, name: "Apple phone" }])
}