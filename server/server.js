const Koa = require('koa');
const static = require('koa-static');

let server = new Koa();
server.listen(8899);

server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');

    await next();
});

server.use(static('./server/static'));
