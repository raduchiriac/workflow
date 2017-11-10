const socketio = require('socket.io');
const actions = require('./actions');

module.exports = (server, db) => {
  const io = socketio(server, {
    'origins': '*:*'
  });

  const isArray = (a) => (!!a) && (a.constructor === Array);
  const isString = (str) => Object.prototype.toString.call(x) === "[object String]";

  io.on('connection', (client) => {
    console.log('\x1b[32m✔ CONNECTED:', client.id, '\x1b[0m');

    client.on("join", (room) => {
      // client.join(room);
    });

    client.on(actions.TRIGGER_ADD, (trigger) => {
      db.triggers.push(trigger);

      io.emit(actions.TRIGGER_ADDED, trigger);
    })

    client.on(actions.TRIGGER_UPDATE, (data) => {
      const idx = db.triggers.findIndex(e => e.key === data.key),
        T = Object.assign({}, db.triggers[idx], data.props);
      db.triggers = Object.assign([], db.triggers, {[idx]: T});

      io.emit(actions.TRIGGER_UPDATED, T);
    })

    client.on(actions.TRIGGER_DELETE, (key) => {
      db.triggers = db.triggers.filter(t => t.key !== key);

      io.emit(actions.TRIGGER_DELETED, key);
    })

    client.on('disconnect', () => {
      console.log('\x1b[31m✕ DISCONNECTED:', client.id, '\x1b[0m');
    });

  });
}
