import mongoose from "mongoose";

const { Schema } = mongoose;
const projectShema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
const Project = mongoose.model("Project", projectShema);
export default Project;

