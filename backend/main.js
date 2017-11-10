import { socketio } from 'socket.io';

let db = require('./db').db;
const server = require('./server')(db);
const io = require('./io')(server, db);
