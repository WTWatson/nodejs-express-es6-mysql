import express from 'express';
import morgan from 'morgan';
import router from './router';
import utils from './utils';

const port = process.env.PORT || 3000;

let app = express()

// Server Logger	
app.use(morgan('dev'));

app.use('/', router());

app.listen(port, utils.startUpMessage(port))
