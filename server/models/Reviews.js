
import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    rating: {
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
    }
}, { timestamps: true })
export default mongoose.models.review || mongoose.model("review", reviewSchema)