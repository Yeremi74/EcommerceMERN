import express from 'express';
import postsRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/categories.routes.js';
import collectionRoutes from './routes/Collection.routes.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname__ = dirname(fileURLToPath(import.meta.url));

// ! middlewares
app.use(
  cors({
    origin: ['https://ecommerce-mern-bim8mkj12-yeremi74s-projects.vercel.app/'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
  })
);
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './upload',
  })
);

// !routes
app.use(postsRoutes);
app.use(categoryRoutes);
app.use(collectionRoutes);

console.log(__dirname__);
app.use(express.static(join(__dirname__, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname__, '../client/dist/index.html'));
});

export default app;
