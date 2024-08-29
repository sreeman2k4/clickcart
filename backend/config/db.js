import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/ecommerce', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;