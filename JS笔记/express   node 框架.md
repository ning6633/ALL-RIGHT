# express   node 框架

### node框架

express、koa       第三方模块   是框架

现在比较流行的两个开发框架

##### express   框架

```javascript
const _express = require('express')//声明 引入该模块
const _app = _express();//声明变量  以便于随时调用


_app.get(‘/login’,(_request,_response)=>{  
	    //_request  表示请求  里面放参数
    	//_response  放返回信息  
    _response.send('访问成功')
})


_app.listen(3000,()=>{           //启动服务器  并且监听
    console.log("服务器启动成功")
});
```

_request   里面放的是传输的信息   get的传输方式 参数在query中  post 方式在body

_response   里面是返回的值    返回值要包括  错误码 、错误信息 、返回信息

```javascripr
let {us.ps.age}=_req.query
//解构赋值，将收到的参数分别付给变量

```

##### 在  POST  的传输方式中   express解析不了加密参数  所以要用到body-parser插件

```
// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
```

post  参数的传递格式  x-www-urlencoded   raw=JSPN    

form-data   文件上传

##### 中间件

作用：在做逻辑处理之前，可以通过中间件做拦截处理。

本质：就是一个函数，同步的函数。

三个参数：_request,_response,_next       过滤完成之后 调用  _next()  继续执行

部分中间件：单独对某一个接口进行处理

全局中间件：对所有的接口进行处理

###### 部分中间件

```javascript
const _express = require('express')//声明 引入该模块
const _app = _express();//声明变量  以便于随时调用

_app.get(‘/login’,(_request,_response,_next)=>{
    if(){
       //中间件可以加上过滤条件  理论上中间件可以存在无线个
       _next();
       }
},(_request,_response)=>{  
    _response.send('访问成功')
})


_app.listen(3000,()=>{           //启动服务器  并且监听
    console.log("服务器启动成功")
});
```

###### 全局中间件

```javascript
const _express = require('express')//声明 引入该模块
const _app = _express();//声明变量  以便于随时调用


_app.use((_request,_response,_next)=>{
    if(_requset.token){
        _next();
    }
})
_app.get(‘/login’,(_request,_response)=>{  
    _response.send('访问成功')
})


_app.listen(3000,()=>{           //启动服务器  并且监听
    console.log("服务器启动成功")
});
```

