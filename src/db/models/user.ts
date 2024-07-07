import mongoose, { Schema } from "mongoose";


 const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    properties: [{ type: Schema.Types.ObjectId, ref: "Property" }]
  });
 

  const UserModel =  mongoose.model("User", userSchema);

  export default UserModel;