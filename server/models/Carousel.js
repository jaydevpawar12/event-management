import mongoose from "mongoose";

const carouselSchema = mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.models.carousel || mongoose.model("carosel", carouselSchema)