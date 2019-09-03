# NODEJS2

数据在内存中是以流式的方式读取  先读取一部分  放回  在读取

爬取图片并下载1、下载目标网站  request  2、获取url  cheerio  筛选  3、根据图片的url  将图片下载到本地

stream  流

### url     统一资源定位符

1. HTTP协议  protocol
2. host 主机地址
   1. hostname  域名
   2. port  端口号
3. 路径  path
   1. pathname
   2. query/search
4. hash

#### url

1. 引入url模块
2. url.parse(将字符串转换为对象)
3. url.format(将对象转换为字符串)
4. 对统一资源定位符做解析

#### query

1. queryString.parse   将字符串变为对象（参数2和3  为分割的特殊符号  默认&  =）
2. queryString.stringfiy（将对象变为字符串）
3. queryString.escape（中文编码）
4. queryString.unescape

#### url传参处理

1. 转编码
   1. encodeURIComponent()
2. 解码
   1. decodeURIComponent()

#### path

1. __dirname：获取当前文件所在文件夹的绝对路径
2. path.join（a,b,c,d,e,f...）将所有参数路径做智能拼接
3. path.join(__dirname, 相对路径)
4. 生成路径

#### node框架

1. express   第三方模块
   
   1. 安装   npm  install express
   
   2. API接口
   
      1. ```javascript
         _app.get(url,(_request,_responst)=>{
             let {us,ps}=_request.query;
             //get 传参，参数在query
             //post 传参  参数在body  body-pasper
             let {us,ps}=_request.body;
             if（）{
                 _responst.send(code:0;msg:'ok',data:{})
             }
         })
         ```
   
      2. 错误码、错误信息、返回信息
   
      3. 获取前端传递的数据
   
         1. get   _request.query  接受
         2. Post  _request.body  接受 
            1. 需要通过body-parser  帮忙查询
            2. post的数据格式
               1. x-www-form  表单格式
               2. form—data  传图片
               3. raw    json     json格式 
   
      4. 中间键   use(-req,_res,next)=>{}
   
         1. 在处理数据之前，可以做一些拦截处理  本质就是一个函数  利用同步执行原理
         2. 三个参数
         3. 局部中间件  单独对某一接口进行处理
         4. 全局中间件   对所有的接口都做处理
   
   3. 静态资源目录  （www）
   
      1. static
   
   4. 路由  
   
      1. router
   
2. koa



用fs  文件系统  的 注册登录

实现邮件验证码注册的流程