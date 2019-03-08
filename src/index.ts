import express from 'express';
import mongoose from 'mongoose';

import { PORT, DB_URL } from './config';

mongoose.connect(DB_URL, { useNewUrlParser: true });

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, (err: Error) => {
  if (err) {
    throw err;
  }
  // tslint:disable-next-line
  console.log(`App is listening on port ${PORT}`);
});
