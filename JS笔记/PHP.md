# PHP

1. php：
   1. 运行在服务器上的弱类型脚本语言   是运行在apache 服务下的脚本语言
   2. 代码的隐蔽性好一点，安全性相对于javascript瑶高一点
2. javascript
   1. 是运行在浏览器上的脚本语言
   2. 代码逻辑暴露太强，安全性相对较低

脚本语言和编译型语言的区别

1. 脚本语言需要解释工具
   1. PHP的解释工具：apache
   2. javascript的解释工具：浏览器
2. 编译型语言：不需要翻译，机器可以直接识别
   1. 产品发布时，一次性的由编译工具去编译，把我们的代码便启程机器可以识别的语言。以后在执行时，效率高，因为机器可以直接读，不需要翻译。

## PHP的语法结构

```php
<?php
    echo"I'm your father";
    ?>
```

1. 变量声明（没有   ）
   1. 以 $ 开头  ，没有声明，直接用
2. 运算符（与javascript相同）
   1. 字符串拼接用“  .  ”（点）
   2. 取反  “-x”
   3. 不等于  !=    <>   绝对不等于  !==
   4. 与  & and    或  |  or 
3. 分支语句
4. 循环语句
5. 函数  function 
6. 数组
7. 字符串

## PHP   connect  Mysqli

```php
function reader(){
    $connect=new mysqli("127.0.0.1",root,root,"Students");
    //php 创建Mysql 链接桥
    if($connect->error){//判断php链接是否成功
        die("error");//如果连接失败  结束程序
    }else{
        $_arr=$connect->query("select * from students");//用链接下的query方法查询Mysql数据库students表中的数据
        //seclect语句的query方法返回值时个记录集合，简称记录集
        $connect->close();//关闭数据库
    }
    
}
reader();
```

