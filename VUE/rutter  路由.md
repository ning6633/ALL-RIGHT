# router  路由

##### 综合页面

```javascript
const _express = require('express')
const _app = _express();
const _homeRouter= require('./router/home.js')
const _adminRouter= require('./router/admin.js')
_app.use('/home',_homeRouter);
_app.use('/admin',_adminRouter);


_app.listen(3000,()=>{
    console.log("成功")
})

```

##### 分页面

```javascript
const _express = require('express')
const _router = _express.Router()
_router.get('/login',(_req,_res)=>{
        _res.send({err:1,msg:"前台登录成功"});
});
_router.get('/reg',(_req,_res)=>{
        _res.send({err:1,msg:"前台注册成功"});
});
module.exports= _router;
```

