import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const BACKEND_URL = process.env.BACKEND_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
// process.env.MONGODB_URI || 'mongodb://localhost/ecommercemern';

export const PORT = process.env.PORT || 4000;
