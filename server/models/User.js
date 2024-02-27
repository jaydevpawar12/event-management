
import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "user"
    }
}, { timestamps: true })
export default mongoose.models.user || mongoose.model("user", userSchema)