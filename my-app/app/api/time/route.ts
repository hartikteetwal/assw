import { NextResponse } from "next/server";

// export const dynamic = "force-static";
// export const revalidate = 10

export async function GET() {
    const date = Date.now()
    const redableDate = new Date(date).toTimeString()
    console.log(redableDate)
    return NextResponse.json({time:redableDate})
}