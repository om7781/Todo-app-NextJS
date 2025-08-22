import { connect } from "@/dbconfig/dbconfig";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function GET(params) {
    try {
        await connect();
        const tasks = await Task.find();
        return NextResponse.json({tasks})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}