"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const parserController = require("./controllers/parser");
const app = express();
app.set('port', 3000);
app.get('/', parserController.hi);
app.post('/api/v1/parse', parserController.v1Parse);
app.post('/api/v2/parse', parserController.v2Parse);
exports.default = app;
//# sourceMappingURL=app.js.map