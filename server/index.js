import { connectDB } from './db.js';
import { PORT } from './config.js';
import app from './app.js';

connectDB();
app.listen(3001);
console.log(`server is running in port asd`, 3001);
setTimeout(() => {
  console.log('active');
}, 10000);
