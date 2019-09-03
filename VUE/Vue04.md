# Vue05     Wath  监听  slot插槽

可以单独监听某一个函数的变化

watch  监听里  监听的DOM元素时修改之前的

写在methods之后

<slot></slot>

组件标签内部，默认是不能放DOM元素的。但是在某些情况下，希望组件标签内部的元素可以渲染，可以使用插槽来实现    《slot》

slot的作用是在组件里面开创一个空间，来存放

slot可以有无限个

命名插槽：通过slot属性  给元素起一个名字。在使用slot时 通过name可以使用这个名字

##### Vue中数据变 页面不一定变

1. 操作引用类型的数据    动态添加属性 
   1. 动态添加的属性没有setter和getter

##### Vue的响应式原理

> 1. 通过Object.defineProperty处理data里的数据   
> 2. 当数据修改的时候  触发set    当数据获取的时候  触发  get
> 3. 数据触发  时  触发watcher  监听      通知DOM的修改

##### 用原生的js模拟双向数据绑定

1. 正常的属性没有get 和 set
2. 通过Object.defineProperty(要处理的数据，数据的属性,{set(){},get(){}})
3. set 在赋值的时候自动触发   参数data就是修改的数据
4. get在取值的时候自动触发

修改DOM元素的时候会引起修改

浏览器的解析流程

VUE的响应式原理