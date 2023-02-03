const jsonServer = require('json-server');

const db = {
  'tasks': [
    {
      'id': 1,
      'task': 'check json-server',
      'priority': 0, // от 0 до 3
      'desc': 'check carefully',
      'status': 'done', // done, won't do, undefined
      'list': 'inbox',
      'createdAt': 0, // время в unix формате
      'statusAt': 0, // время в unix формате, присутствует только у задач со статусом
      'dueTo': 0, // время в unix формате, когда задача должна быть выполнена
      'removed': false
    },
    {
      'id': 2,
      'task': 'check lists',
      'list': 'todo',
      'createdAt': 0, // время в unix формате
      'removed': false
    }
  ],
  'lists': ['todo', 'inbox']
}

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);

server.use(router);
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});