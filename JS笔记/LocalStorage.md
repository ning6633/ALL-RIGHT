# localStorage

##### LocalStorage：本地存储器

1. 文本类型
2. 4MB左右
3. 不会随HTTP请求被发送到服务器
4. 没有过期时长
5. 也是键值对形式存储
6. 一次只能存一个键值对

##### sessionStorage：会话级存储

1. 打开网页叫会话开始      关闭网页时会话结束
2. 会话结束时数据就会消失

##### localStorage的操作

```javascript
var _storage=window.localStorage;
_storage.setItem("key","value");
_storage.getItem("key");
_storage.removeItem("key");
```



1. 添加内容：setItem("key"."value")
2. 读取内容：get("key");
3. 删除指定项内容：removeItem("key");
4. 删除所有项：clear();

