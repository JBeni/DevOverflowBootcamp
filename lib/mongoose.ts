import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    return console.error('MISSING MONGODB_URL');
  }

  if (isConnected) {
    return console.error('MongoDB is already connected');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'DevFlow_Nextjs_Bootcamp'
    });

    isConnected = true;
  } catch (error) {
    console.error('MongoDB connection failed', error)
  }
}
