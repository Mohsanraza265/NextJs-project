import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
    const data = user;
    return NextResponse.json(data, {status: 200});
}
export async function POST(request){
    let payload = await request.json()
    console.log(payload);
    if(!payload.name){
        return NextResponse.json({result:"name is required.",success:false}, {status:400})
    } else if(!payload.email){
        return NextResponse.json({result:"email is required.",success:false}, {status:400})
    } else if(!payload.age){
        return NextResponse.json({result:"age is required.",success:false}, {status:400})
    }
    return NextResponse.json({result:"Hello",success:true}, {status: 200})
}
