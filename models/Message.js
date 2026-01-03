import { model, Schema } from "mongoose";

const messageSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export default model("Message", messageSchema);
