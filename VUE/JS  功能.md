# JS  功能

前端的JS：基本语法、DOM操作|、BOM操作、Ajax

限制语言能力的不是语言本身，而是 运行环境（runtime 平台）

## NODE.JS

1. 浏览器的运行guocheng
   1. 发送请求  index.html   index.css   index.js
   2. 获取网页文件
   3. 解析器   
      1. css解析器   js解析器   html解析器   图片解析器 ......
      2. 浏览器的内核引擎（运行js代码）chrome V8
   4. 浏览器的运行环境赋予了  js   dom  bom  ajax  这些功能，浏览器可以赋予JS操作文件的功能     但是为了安全  不能做
   
2. node.js
   1. JS的基本语法
   2. 操作数据库
   3. 操作本都文件
   4. 发起网络请求
   5. 不能 操作BOM  DOM
   6. node.js   不是语言、不是框架     而是服务器端的运行环境（runtime   platform）
   7. chrome V8   专门进行JS的基本语法运算
   8. utis     操作数据库  操作文件
   9. 使用一个事件驱动、非阻塞式I/O的模型，使其轻量又高效
      1. I/O模型  input输入    output 输出  都是耗时的
      2. 数据库的操作
      3. 正常情况下I/O都是同步的  阻塞
      4. 通过将同步操作变成异步操作，所以NODE能做高并发处理
         1. node 直接作为服务器端来用
         2. node 作为中间层来用
   10. nvm
       1. Node Version Manager  (Node 版本管理工具)
       2. 工作中  项目的版本不同来切换node的版本
       3. nvm   ls    显示安装的所有版本 
       4. nvm   use   使用某个版本号
       5. nvm  install  10.0.12  安装某个版本
       6. nvm   uninstall  10.0.12  卸载某个版本
   
3. AMD、CMD、commingjs  加载规范
   1. 模块化开发
      1. 把部分的共同点切分出去，形成一个模块。使用时引入这个模块
         1. 声明模块并抛出，一个js文件就是一个模块
            1. module.exports=   抛出
         2. 引用模块
            1. require("url")
      2. 主要分三种
         1. 内置模块
         2. 第三方模块
         3. 自定义模块
   
4. 文件夹的操作

   1. 新建文件夹

      1. ```node.js
         const fs=require('fs');
         
         
         //异步方法
         //fs.mkdir('./demo',(err)=>{
         //    if(err){
         //        console.log("执行失败");
         //    }else{
         //        console.log("创建成功");
         //    }
         //});
         //console.log("1");
         
         
         //同步方法
         //fs.mkdirSync('./demo');
         //console.log(1);
         //同步非阻塞
         //try{
         //    fs.mkdirSync('./demo');
         //}catch(error){
         //    console.log("错");
         //}
         ```

         

   2. 删除文件夹

      1. ```node.js
         fs.rmdir()
         ```

      2. 

   3. 修改名字

   4. 读取文件夹

   5. c u r d   增删改查

   6. 错误的回调优先（第一个参数表示错误     异步执行的结果）  回调的默认值是null    在执行异步的过程中，可能会出错误   将错误对象付给第一参数

5. 爬虫   从网页获取数据

   1. 获取网页信息     （发起请求   服务端请求）
   2. 筛选分析有效数据

### api接口     食品的增删改查

1. 接受用户数据
   1. 删除一条数据：主键ID   delone
   2. 增加一条信息：将数据添加如数据库   前端通过Ajax  insert
   3. 修改：uptate
   4. 查询：find()
      1. 分页查询      显示 数据的总长度  进行分页
      2. 分类查询       检测type属性是否存在  可以和分页查询用统一接口
      3. 模糊查询
   5. 图片上传
      1. 前端角度
         1. 将图片发送给后端  ajax
            1. 准备上传文件信息  文件域
            2. 将文件信息储存到 formdata()
            3. 调用API接口进行上传
         2. 接受返回的信息
            1. 前端页面显示图片
      2. 后端角度
         1. 将前端上传的图片放到静态资源目录
            1. multer.()singer('文件名')   req.file
            2. 将获取的数据保存到文件
         2. 将图片的信息返回到前端 
      3. 注意事项
         1. 上传图片的数据类型   form-data
         2. 方法   POST
         3. 正常Ajaxpost数据传输的格式 只有两种分
2. 处理用户数据
3. 返回处理结果

### 无状态请求

http  https   无状态请求  （对于服务器来说不知道请求从哪里而来）

用户鉴权    加锁

**jwt**     (  json-web-token )

- 用户登录时，服务器端产生一个token给前端

- 前端在本地保存一个token

- 调用其他接口的是hi偶携带token

- 验证token的合法性

- ```javascript
  const jwt=require('jsonwebtoken');
  let _payload={us:"zhangsan",uid:"12138"};
  let _secret='rwejogffddgnmksreohoirhguawr513153';
  let _token=jwt.sign(_payload,_secret);
  console.log(_token);
  /**
  payload 载荷 用户传递的数据
  secret  密钥
  
  加密方式。加密内容。私钥
  ```

- 

**cookie + session**

- 用户登录   服务器端产生一个session 将session 加密，直接写入cookie
- 用户调用其他接口时会自动携带cookie
- 服务器端会获取cookie  进行验证

### 第三方登录

OAuth 2.0认证

轮询:每隔多长时间刷新一次页面

##### 长连接

- （客户端和服务器端，建立连接，不间断）：socket
- 服务器可以主动向前端推送消息，前端也可以向服务器端发起请求
- client  客户端链接对象
- client.send(  )  向

##### 短链接

- （请求  回应一次，结束）：Ajax    
- 前端向服务器端发起请求

##### 应用场景

1. 实时刷新
   1. 股票：轮询——>长连接
2. 站内信
3. 活动的中奖信息

### websocket

1. H5新增特性
2. 使用简单
3. 兼容问题

### socket.io  插件、模块

1. 使用复杂
2. 兼容问题少

