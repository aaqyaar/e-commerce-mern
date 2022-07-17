const mongoose = require("mongoose");

exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
