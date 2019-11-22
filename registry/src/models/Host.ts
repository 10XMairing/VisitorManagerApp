import * as mongoose from "mongoose";

interface IHostDocument extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

const Host = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter full name"],
      index: true
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true
    },
    phone: {
      type: String,
      required: [true, "Please enter phone number"]
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IHostDocument>("host", Host);
