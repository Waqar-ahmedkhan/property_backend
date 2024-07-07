import mongoose from "mongoose";

const { Schema } = mongoose;

const propertySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    propertytype: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

// Compile the schema into a model
const Property = mongoose.model("Property", propertySchema);

export default Property;
