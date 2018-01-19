import koa from 'koa';
import koaRouter from 'koa-router';
import koaStatic from 'koa-static';
import koaCors from 'koa2-cors';
import path from 'path';

import { getImage } from './screenshot';

const app = new koa();
const router = new koaRouter();

process.setMaxListeners(10);

app.use(koaCors());

const clientPath = path.join(__dirname, '..', 'client');

app.use(koaStatic(clientPath));

router.get('/screenshot', async (ctx) => {
  const url = ctx.query.url;
  
  if (!url) {
    ctx.status = 400;
    return ctx.body = 'No Url Provided';
  }

  const regex = /^https?:///;

  if (!regex.test(url)) {
    ctx.status = 400;
    return ctx.body = 'Invalid Url Provided';
  }

  const image = await getImage(url);

  ctx.body = {
    url,
    image
  };
});

router.get('/sites', (ctx) => {
  ctx.body = require(path.join(__dirname, '../../', 'static', 'sites.json'));
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
