const mongoose = require("mongoose");

const BootCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Add a name"],
    unique: true,
    trim: true,
    maxLength: [50, "Name can not be more than 50 Characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please Add a description"],
    trim: true,
    maxLength: [500, "Description can not be more than 500 Characters"],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
});
