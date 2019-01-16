'use strict';
/**
 * 服务路由配置
 */
const Router = require('koa-router');
var router = new Router();

//根路径/首页
router.get('/', async (ctx, next) => {
    await ctx.render('index');
});

module.exports = router;