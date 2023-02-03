const jsonServer = require('json-server');

const db = {
  "tasks": [
    {
      "id": 1,
      "task": "check json-server"
    },
    {
      "id": 2,
      "task": "check lists"
    }
  ],
  "lists": ["todo", "done", "inbox"]
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