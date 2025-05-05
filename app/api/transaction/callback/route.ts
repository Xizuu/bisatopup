import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    return NextResponse.json({
        status: 200,
        message: "Hello world"
    })
}