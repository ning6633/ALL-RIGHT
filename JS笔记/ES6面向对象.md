# ES6面向对象

**类**：描述一类事物的抽象的概念    是对对象的抽象描述

**对象**：类的实例   就是累所描述的对象  对象一般有属性和值

**构造器**：构造函数，用来构造对象用的     构造类的实例

**封装**：声明（定义）类的过程

**命名空间**：文件夹的额名称+类的名称    
		作用：可以更好地解决作用域内变量命名的冲突问题

语法：关键字**Class**声明一个类

```javascript
class Animate{
    constructor{//构造器
    	this.keg=2;//定义对象的属性
        this.eye=3;
        this.eat=function(_food){//定义对象的方法、动作、行为、技能
        };
        this.fiy=function(_canshu){}
    }
}
```

多属性运动框架的封装

1. 语法

   1. ```javascript
      class Sport{
          constructor(){
              
          }
      }
      ```

2. 代码的通用性

3. 高内聚低耦合

