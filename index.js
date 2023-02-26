const jsonServer = require('json-server');

const db = {
  'tasks': [
    {
      'id': 1,
      'task': 'check json-server',
      'priority': 0,
      'desc': '# Hello\n## World!',
      'status': 'done',
      'listId': 1,
      'createdAt': 0,
      'statusAt': 0, // время в unix формате, присутствует только у задач со статусом
      'dueTo': 0, // время в unix формате, когда задача должна быть выполнена
      'removed': false
    },
    {
      'id': 2,
      'task': 'check lists',
      'priority': 1,
      'listId': 2,
      'createdAt': 0,
      'desc': 'Line one\nLine two',
      'removed': false
    },
    {
      'id': 3,
      'task': 'empty desc',
      'priority': 3,
      'listId': 2,
      'createdAt': 0,
      'removed': false
    },
  ],
  'lists': [
    {
      id: 1,
      name: 'inbox',
    },
    {
      id: 2,
      name: 'todo',
      color: '#ffffff'
    }
  ]
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