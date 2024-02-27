
import mongoose from "mongoose"

const couponSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    tnc: {
        type: String,
        required: true
    },
    validity: {
        type: Date,
        required: true
    },
}, { timestamps: true })
export default mongoose.models.coupon || mongoose.model("coupon", couponSchema)