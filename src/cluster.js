import cluster from 'cluster';
import os from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import log from './utils/logger.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cpuCount = os.cpus().length;

log.info(`The total number of CPUs is ${cpuCount}`);
log.info(`Master ${process.pid} is running`);
cluster.setupPrimary({
  exec: __dirname + '/server.js',
});

for (let i = 0; i < cpuCount; i++) {
  cluster.fork();
}
cluster.on('exit', (worker, code, signal) => {
  log.error(`Worker ${worker.process.pid} died`);
  log.info('Starting a new worker');
  cluster.fork();
});
