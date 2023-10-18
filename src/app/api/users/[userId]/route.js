
import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request, response) {
    // console.log(response.params.userId);
    const data = user.filter((item) => item.id == response.params.userId)
    return NextResponse.json(data.length==0 ? {result: "No data Found",success:false} : {result:data[0], success:true} , {status: 200});
}

export async function PUT(request, content) {

    let payload = await request.json();
    payload.id = content.params.userId;

    if(!payload.name){
        return NextResponse.json({result:"name is required.", success:false}, {status:400})
    } else if(!payload.email){
        return NextResponse.json({result:"email is required.",success:false}, {status:400})
    } else if(!payload.age){
        return NextResponse.json({result:"age is required.",success:false}, {status:400})
    }

    return NextResponse.json({result: payload, success: true}, {status: 200});

}

export async function DELETE(request, content) {
    let id = content.params.userId;
    if(id) {
        return NextResponse.json({result:"User Deleted successfully.",success:true}, {status:200})
    } else {
        return NextResponse.json({result:"Please try Again .",success:false}, {status:400})
    }
}