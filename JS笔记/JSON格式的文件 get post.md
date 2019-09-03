JSON格式的文件

大括号   键名要加双引号    键值如果是字符串 也要引起了来





用JSON.prese   键名要加引号

GET  方式  和POST 方式的区别是：get方式的传输大小受限于url地址栏的长度 ，并且显示传输的内容   post的传输大小默认的是2GB

有src的scrript  里面不能写

$__SERVER[]  自动判断传输方式是POST  或者   GET



## 登录注册

​	首页（引入Ajax的查询接口，接入数据库）——>

isset（$_SESSION["user"]_）用来判断是否链接服务器成功

$_SESSION 是超全局变量   只要程序不停止  $_SESSION  就会永远存在
服务器中的超全局变量的生命周期与应用程序同售

### 跨域

- 域：范围。
- 不同源的情况下、不同名、协议不同（同协议、同域名、同端口）
- js是文本文件
- script  标签里面可以放很多种类型的文档    但是只执行合法的js代码
  - 是通过服务器执行的
  - script  标签还可以执行txt  文件      就是txt  里面合法的js代码也可以被执行  

1. JSONP跨域 是利用script  的src 属性，具有访问远程资源的特性来实现的跨域请求
2. 跨域访问时，服务器API接口的返回值必须是可执行的js代码
3. JSONP的跨域方式是GET方式
4. 跨域请求的应用场景
   1. 跨多个平台进行数据访问时，就需要跨域

#### JSONP和JSON的关系

jsonp是跨域请求的一种方式

json是一种数据格式

#### Promise作用：解决异步嵌套的问题  这是个垃圾

1. ```javascript
   new  Promise(function(_resolve,_reject)){
       ().then()
   }
   throw "error"//抛出异常  扔出一个错误
   ```

2. 只能解决两层嵌套

3. Promis有三个状态码

   1. pending：new Promise （）；表示准备状态，
   2. fulfilled：调用__resolve函数时，就会自动将pending状态修改为fulfilled状态
   3. rejected：发生调用或异常时Promise会自动将pending状态修改为rejected状态

4. Promise的状态时不可逆的

5. 语法：new Promise（_executor）;  _executor时一个函数，这个函数有两个参数

   1. 用then（）方法代替回调函数
   2. catch（）方法
   3. Promise类自有的方法all，可以等待所有Promise实例对象执行完毕之后，调用then（）方法
   4. race方法是开始就执行then（）
