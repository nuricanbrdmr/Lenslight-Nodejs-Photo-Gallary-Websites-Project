import mongoose from "mongoose";

const { Schema } = mongoose

const photoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    },
    url: {
        type: String,
        require: true,
    },
    image_id: {
        type: String,
    }
})

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
