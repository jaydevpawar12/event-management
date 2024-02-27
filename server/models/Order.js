
import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    packageId: {
        type: [mongoose.Types.ObjectId],
        ref: "package",
        required: true
    },
    paymentDoc: {
        type: [String],
        required: true
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    couponId: {
        type: String,
        // required: true
    }
    ,
    // dateTime: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true })
export default mongoose.models.order || mongoose.model("order", orderSchema)