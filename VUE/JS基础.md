# JS基础

ECMA Script

用来规范微软和甲骨文的 script

> js应用场景：
> 		electron：可以将js编译成桌面上的应用程序
> 		移动端：可以直接用于webview
> 		可穿戴设备

2018年所有的编程语言当中，市场活跃度第一。

> 性质：弱类型脚本语言（不需要强调数据类型）
>
> 编译型语言：在项目发布时就会编译成机器可以识别的代码。执行时，不需要工具解释，不够灵活。
>
> 脚本语言：需要工具解释执行。  例如：js需要浏览器解释，相对编译型语言来讲，多了一个环节。

## JavaScript 使用方法

1. 在页面上直接写javascript的代码，类似于style
2. 引入外部  js  文件，

## JavaScript的运行环境

1. 在网页中运行，基于浏览器的 js 引擎，执行解释 js
2. node 环境中运行，基于Google  V8引擎解释执行

## JavaScript的作用

动画效果、数据交互、逻辑处理、一定程度上给浏览器分压（将代码下载到客户端，在客户端的网页上执行，数据不安全）、开发交互页面

## JavaScript 和 H5 的关系

javascript 依赖于html5 的网页才可以运行

H5包含JavaScript

## JavaScript变量

> 变量：值可以改变的标识符  称之为变量
>
> 标识符：具有标识意义的符号
>
> 变量声明：var 不可以强制字符类型

1. 关键字：var
   1. 作用：在内存中开辟一片空间，保存变量的值
2. 驼峰式命名习惯：
   1. 变量名首字母小写，后面的其它单词首字母大写。
3. 变量的命名规则：
   1. 字母、数字、下划线、$	的组合
      1. 数字不能作为变量名的开头
   2. 变量区分大小写
      1. 大写字母和小写字母待变两个东西，不能使用关键字和保留字
   3. 关键字：
      1. 已经有特殊意义的单词
      2. 习惯 以下划线开头，避免和关键字的冲突
   4. 保留字：
      1. 将来可能要用到的关键字

## 常用方法

1. document.write();
   1. document   是 HTML 的文档对象
   2. .write()      通过对象来调用方法
   3. 没有返回值
2. console.log();
   1. console   表示在控制台输出
   2. .log    表示日志
3. window.alert();
   1. 警告框，会在网页上方弹出一个警告框
   2. window   是对象   可以省略掉
4. window.confirm();
   1. 警告对话框，这个方法有返回值返回值是Boolean类型的值
5. window.prompt();
   1. 输入框，这个方法有返回值，返回值就是在对话框中输入的内容
   2. 可以中断程序的运行，直到这句话运行完毕
   3. 点击确定时，返回值时文本框中的内容
   4. 点击取消时，返回值时Null。

## 赋值符号

- “  =  ”   ：赋值符号的作用是让变量拥有一个指定的值，变量名一定要在赋值符号的左边
- String 表示 字符串类型
- Number 表示 数字类型
- typeof   用来检测输出内容的类型

## 表达式的介绍

- 表达式：通过计算，返回一个结果的语句
- 表达式的特性：表达式不常驻内存，运行完毕就会立即释放

## 数据类型

- 加上双引号或者单引号的 称之为  字符串
- 每一个英文字母为一个字符，多个英文字母组成字符串
- JavaScript中没有字符的概念    char 类型

## 数据类型的转换

#### 非0即真

1. 隐式数据类型的转换
   1. 看不见的数据类型转换
   2. 小类型向大类型的 数据类型的转换，4 位 向 8 位
   3. Number数据类型转换 和 parseInt 数据类型转换时有小数位区别的，都可以转换为数字类型    toFixed()；保留小数点后几位。
      1. Number转换完成后带小数点
      2. parseInt转换完成后不带小数点
2. 显式数据类型转换、手动数据类型转换、强制数据类型转换
3. NaN
   1. 常量值为 ：not a number
   2. 值的类型：number
4. isNaN
   1. 是个方法
   2. 作用：判断 变量或者某个具体值是否不是数字
5. typeof
   1. 检测数据类型

## JavaScript的数据类型      六种基本数据类型

1. Number     数字类型
2. String     字符串类型
3. Boolean    Boolean类型
4. null  （常量）  输出值为空
5. undefined  （常量）  表示未定义
6. Object    引用数据类型   涉及到对象的都是引用数据类型

