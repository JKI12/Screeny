import redis from 'redis';
import { promisify } from 'util';

let client;

export const getClient = () => {
  if (!client) {
    client = redis.createClient(process.env.REDIS_PORT || 32770, process.env.REDIS_HOST || 'home.local');
  }

  client.select(0, (error) => {
    if (error) {
      console.error(error);
    }
  });

  client.on("error", (err) => {
    console.log("Error " + err);
  });

  return {
    getAsync: promisify(client.get).bind(client),
    setAsync: promisify(client.set).bind(client)
  }
};
