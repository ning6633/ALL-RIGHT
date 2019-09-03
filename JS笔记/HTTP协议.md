# HTTP协议

1. 超文本传输     HTTP协议底层的是
   1. TCP/IP协议 ：基本不丢包，要经过3次握手协议
   2. UDP协议：容易丢包 （需要多次检索），快   大   没有三次握手协议
2. HTTP请求中 一定会包含请求的头部报文，服务器验证通过后就可以会话了。
   1. HTTP请求没有记忆功能，又叫无状态协议。
3. 浏览器第一次去服务器上，服务器会给浏览器一张票（SessionID）
4. 浏览器吧SessionID保存到Cookie中
5. 下次访问相同服务器时，就会携带Cookie一起去服务器上
6. 服务器需要检票（检验Cookie中的SessionID）
   1. SessionID在服务器上一般没有意外的情况下，会存20分钟，也是又有效期的
   2. SessionID就是服务器上的Cookie

## Cookie是什么东西

1. Cookie是浏览器的小型存贮器，是存在硬盘上的文本类型文件
2. Cookie是有  有效期的
3. Cookie是有大小限制的（4kb~10kb左右）

## Cookie是如何使用的

1. 获取Cookie的方法
   1. document.cookie
2. Cookie的值是String类型
3. 先获得Cookie

## 例子

```javascript
// viewedPg=066e0b01f12d2af90242e6a5%3D1%7C0;
        // wkview_gotodaily_tip=1;
        // Hm_lvt_d8bfb560f8d03bbefc9bdecafc4a4bf6=1561699264;
        // 1911ACart=[
        //     {"ID":"20190702152455789","counter":"10","comment":"M"},
        //     {"ID":"20190702152555789","counter":"5","comment":"abc"},
        //     {"ID":"20190628120815","counter":"1","comment":""}
        //     ]
//第一种   从Cookie中拿出想要的数据
var _cookie=document.cookie;
var _map=_cookie.split(";");//以_cookie 中的 ；作为分隔符，将_cookie分割开来
var _item=null;//声明变量  准备接收键码值
for(var i=0;i<_map.length;i++){
    _item=_map[i].split("=");//将每一个元素赋值给_item,并用=分隔开
    if(_item[0].indexOf("1911ACart">=0)){
       console.log(_item[1]);
       }
}

//第二种方法  正则表达式
var _regex=/1911ACart=\[({("\w+":"\w*",?)+},?)+]/g;
 console.log(_cookie.match(_regex));

```

中文编码：encodeURIComponent();

中文解码：decodeURIComponent();

### Cookie的增删改查

读取：document.cookie；

写入：document.cookie=“key=value；”；

删除：让Cookie过期

修改：document.cookie="key=value";   可以修改

cookie的几个系统属性的使用方式：就是在键值对后面加上需要的属性就可以

注意：键值对一次只可以添加一个

### Cookie中的其他属性

1. domain：控制同源策略
   1. 同源：同协议、同域名、同端口  http默认的端口号：8080
2. path：表示Cookie存放的路径
   1. path=/；
3. expires：表示过期时间，就会消失

### 利用Cookie可以做那些事情

1. 购物车
   1. 参考来源：
   2. 首页上有个购物车商品数量的统计
   3. 在商品详情页
2. 7天免登录
3. 智能推送