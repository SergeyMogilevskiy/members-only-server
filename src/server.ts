import express from 'express';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import { credentials } from '../key/credentials';
import { routes } from './routes';

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();
app.get('sas', (req, res) => {});
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
