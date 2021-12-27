import {createServer} from 'http';
import {router} from './routes';

const host = 'localhost';
const port = 8000;

const server = createServer(async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.setHeader('Content-Type', 'application/json, text/plain; charset=utf-8;');
  response.setHeader('Access-Control-Max-Age', '-1');

  if (request.method === 'OPTIONS') {
    response.statusCode = 200;
    return response.end();
  }
  router(request, response);
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
