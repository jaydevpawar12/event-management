
import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
}, { timestamps: true })
export default mongoose.models.contact || mongoose.model("contact", contactSchema)