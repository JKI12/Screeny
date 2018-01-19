import puppeteer from 'puppeteer';

import { getFromCache, setInCache } from './cache';

const takeScreenshot = async (url) => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 768,
    isLandscape: true
  })
  await page.goto(url);

  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  const buffer = await page.screenshot();

  await browser.close();

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
