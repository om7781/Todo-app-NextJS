import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    Taskname : {
        type : String,
        required : true
    },
    TaskDesc : {
        type : String,
        required : true
    }
});

const Task = mongoose.models.Task || mongoose.model("Task",TaskSchema);
export default Task;