import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Connection Successful")
        })
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
} 