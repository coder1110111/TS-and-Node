import express from 'express';
//import express = require('express'); in TS File

import todosRoutes from './routes/todos';       //this statement will always take the default import from the file mentioned

const app = express();

app.use(todosRoutes);

app.listen({ port: 3000 });