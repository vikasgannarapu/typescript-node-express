import express = require('express');
import * as parserController from './controllers/parser';

const app = express();

app.set('port', 3000);

app.get('/', parserController.hi);

app.post('/api/v1/parse', parserController.v1Parse);
app.post('/api/v2/parse', parserController.v2Parse);

export default app;