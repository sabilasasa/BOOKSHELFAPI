import Hapi from '@hapi/hapi';
import routes from './routes.js';

const server = Hapi.server({
  port: 9000,
  host: 'localhost',
});

const init = async () => {
  server.route(routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
