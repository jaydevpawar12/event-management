import mongoose from "mongoose";

const CmsSchema = mongoose.Schema({
    brandname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    socialMediaLinks: {
        type: String,
        default: true
    },

}, { timestamps: true })
export default mongoose.models.cms || mongoose.model("cms", CmsSchema)