import express from 'express';
import bodyParser from 'body-parser';
import notesRoutes from './routes/notes.routes';

const app = express();

app.use(bodyParser.json());

app.use('/', notesRoutes);

const port = process.env.PORT || 3000;
app.listen(port);

export default app;
