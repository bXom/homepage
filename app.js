'use strict';

const koa = require('koa');
const views = require('koa-views');
const staticFile = require('koa-static');
const koaBody = require('koa-body');
const path = require('path');
const router = require('./routers/index');
const config = require('./config');

const app = new koa();
app
// .use(bodyParser())
.use(koaBody({
    multipart: true
}))
.use(staticFile(path.join(__dirname, './public')))
.use(views(path.join(__dirname, './views'), {
    extension: 'ejs',
}))
.use(router.routes())
.use(router.allowedMethods());

var server = app.listen(config.system.API_server_port, () => {
    console.log(`Listening on port ${config.system.API_server_port}`)
});