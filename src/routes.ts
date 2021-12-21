import { createUser } from './db';
import { getUsers } from './db';
import { readFileSync } from 'fs';

export function router(request, response) {
  let body = '';

  switch (true) {
    case request.method === 'GET' && request.url === '/': {
      const html = readFileSync('./src/index.html', 'utf-8');
      response.setHeader("Content-Type", "text/html");
      return response.end(html);
    }
    case request.method === 'GET' && request.url === '/style.css': {
      const css = readFileSync('./src/style.css', 'utf-8');
      response.setHeader("Content-Type", "text/css");
      return response.end(css);
    }
    case request.method === 'GET' && request.url === '/front.js': {
      const js = readFileSync('./build/src/front.js', 'utf-8');
      response.setHeader("Content-Type", "text/javascript");
      return response.end(js);
    }
    case request.method === 'GET' && request.url === '/users':
      return response.end(JSON.stringify(getUsers()));

    case request.method === 'POST':
      request.on('data', (chunk) => {
        console.log('+++');
        body += chunk.toString();
      });
      request.on('end', async() => {
        console.log(body);
        await createUser(JSON.parse(body));
        return response.end('User create');
      });
  }
}
