import express from 'express';
import postsRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/categories.routes.js';
import collectionRoutes from './routes/Collection.routes.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// const express = require('express');
// const cors = require('cors');
// const app = express();

const app = express();
const __dirname__ = dirname(fileURLToPath(import.meta.url));

// ! middlewares
const corsConfig = {
  origin: 'https://frontend-ecommercemern.onrender.com/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credential: true,
};

app.options('', cors(corsConfig));
app.use(cors(corsConfig));

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

// console.log(__dirname__);
// app.use(express.static(join(__dirname__, '../client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname__, '../client/dist/index.html'));
// });

export default app;
