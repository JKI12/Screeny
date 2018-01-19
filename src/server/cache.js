import redis from 'redis';

import { getClient } from './redis';

export const getFromCache = async (url) => {
  const result = await getClient().getAsync(url);
  return result;
};

export const setInCache = async (url, stream) => {
  await getClient().setAsync(url, stream);
};
