import express from 'express';
import utils from './utils';

const port = process.env.PORT || 3000;

let app = express()

app.listen(port, utils.startUpMessage(port))
