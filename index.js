const jsonServer = require('json-server');

const db = {
  'tasks': [
    {
      'id': 1,
      'task': 'check json-server',
      'priority': 0,
      'desc': '# Hello\n## World!',
      'status': 'done',
      'list': 'inbox',
      'createdAt': 0,
      'statusAt': 0, // время в unix формате, присутствует только у задач со статусом
      'dueTo': 0, // время в unix формате, когда задача должна быть выполнена
      'removed': false
    },
    {
      'id': 2,
      'task': 'check lists',
      'list': 'todo',
      'createdAt': 0,
      'desc': 'Line one\nLine two',
      'removed': false
    },
    {
      'id': 3,
      'task': 'check code',
      'list': 'todo',
      'createdAt': 0,
      'desc': '```javascript\nconst a = 1\nconst b = 2```',
      'removed': false
    },
    {
      'id': 4,
      'task': 'check list',
      'list': 'todo',
      'createdAt': 0,
      'desc': 'Some List:\n - [ ] one\n - [ ] two\n - [x] three\n',
      'removed': false
    },
    {
      'id': 5,
      'task': 'empty desc',
      'list': 'todo',
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