import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';
// s
export async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log('connected to', db.connection.name);
  } catch (error) {
    console.log(error);
  }
}
