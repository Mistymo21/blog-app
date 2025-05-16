import mongoose from "mongoose";

const {Schema} = mongoose

const postsSchema = new Schema(
    {
        title:{
            type: String,
            unique: true,
        },
        desc:{
            type: String,
            unique: true,
        },
        img:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        }

    },
    {timestamps : true}
)

export default mongoose.model("Posts", postsSchema)