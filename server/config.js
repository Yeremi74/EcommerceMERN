import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://yyeremi15:bostonhype7$@mernecommerce.szwc8kh.mongodb.net/?retryWrites=true&w=majority&appName=mernEcommerce';

export const PORT = process.env.PORT || 4000;

export const TOKEN_SECRET = 'some secret key';
