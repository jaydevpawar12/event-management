
import mongoose from "mongoose"

const packageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    hero: {
        type: [String],
        // required: true
    },
    publish: {
        type: Boolean,
        default: true
    },

}, { timestamps: true })
export default mongoose.models.package || mongoose.model("package", packageSchema)