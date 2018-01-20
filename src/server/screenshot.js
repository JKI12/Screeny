import Nightmare from 'nightmare';

import { getFromCache, setInCache } from './cache';

const takeScreenshot = async (url) => {
  const nightmare = Nightmare({ show: false });

  const buffer = await nightmare
    .viewport(1024, 768)
    .goto(url)
    .wait(1000)
    .screenshot();

  await nightmare.end();

  return buffer;
};

export const getImage = async (url) => {
  let result = await getFromCache(url);

  if (result) {
    console.log(`${url} in the cache`);
    return result;
  }

  console.log(`${url} not in the cache`);
  
  result = await takeScreenshot(url);

  result = result.toString('base64');

  await setInCache(url, result);

  console.log(`${url} added to the cache`);

  return result;
};
