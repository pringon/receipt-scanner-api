import express from 'express';

import { PORT } from './config';

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
