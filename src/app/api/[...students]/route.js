import { NextResponse } from "next/server";

export async function GET(request, content){

    const studentDetails = content.params.students;
    return NextResponse.json({result:studentDetails}, {status: 200});

}