import * as mongoose from "mongoose";

interface iEntryDocument extends mongoose.Document {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  checkin: Date;
  checkout: Date;
  archive: boolean;
  host: string;
}

const Entry = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter full name"],
      index: true
    },
    email: {
      type: String,
      required: [true, "Please enter email"]
    },
    phone: {
      type: String,
      required: [true, "Please enter phone number"]
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
      default: ""
    },
    archive: {
      type: Boolean,
      default: false
    },

    checkin: {
      type: Date
    },
    checkout: {
      type: Date,
      default: ""
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "host",
      required: true
    }
  },
  {
    timestamps: true
  }
);

Entry.pre("find", function(next) {
  this.populate("host");
  next();
});

export default mongoose.model<iEntryDocument>("entry", Entry);
