import { writeFile } from 'fs/promises'
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.formData();
    const file = data.get("file");
    if(!file) {
        return NextResponse.json({ "message" : "no image found", success : false });
    }
    const bytData = await file.arrayBuffer();
    const buffer = Buffer.from(bytData);
    const path = `./public/${file.name}`
    await writeFile(path, buffer)
    return NextResponse.json({ "message" : "file uploaded", success : true });
}