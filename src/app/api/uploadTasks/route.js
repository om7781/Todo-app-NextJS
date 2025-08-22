import { connect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Task from "@/models/Task";

export async function POST(request) {
    try {
    await connect();
    const reqBody = await request.json();
    const {Taskname, TaskDesc} = reqBody;
    const newTask = new Task({Taskname, TaskDesc})
    await newTask.save();
    return NextResponse.json({message:"Successfully Uploaded a task!"})
} catch (error) {
    console.log(error)
    return NextResponse.json({error:error.message},{status:500})
}
}