# vue  day_2



### 组件化开发

##### 什么是组件

1. 代码进行复用
2. 组件时实例的拓展子类
3. 组件继承自实力

##### 组件的分类

​	**全局组件**

> 所有的实力都可以使用，就是全局组件。
>
> 只要组件完成了，注册了，全局就可以使用。注册的组件必须放到实力组件上方
>
> 全局组件本身没有嵌套关系，由 使用的方式来赋予嵌套关系
>
> 全局组件嵌套：将一个组件放到另一个组件内部

​	**局部组件**

> 哪里注册那里使用
>
> ```javascript
> let new Vue({
>     el:'',
>     data:{
>         
>     },
>     methods:{
>         
>     },
>     components:{
>         'hehe':{
>             template:"<><>",
>             data(){
>                 return {
>                     name:
>                 }
>             }
>         }
>     }
> })
> ```

​	**组建的创建**

> 创建组件：Vue.compoment( '' ,{   template:"<><>"})
>
> 可以将组件名作为DOM元素名进行使用
>
> ```java
> Vue.component('name',{
>     template:'<div></div>'
> })
> ```
>
> 

​		**template标签**

> 通过声明template标签    创建Dom 元素     赋予ID后     可以再创建组建来调用此ID      以至于 用来创建多个  DOM 元素.
>
> template只能有一个直接根元素
>
> 实例中  data  是对象，组件中华  data  是函数
>
> this  指向组件对象
>
> ```javascript
> Vue.component('name',{
>     template:'#ID'，
>     data(){
>     return {
>         name:'那就这样吧'，
>         sel:""
>     	}
> 	}，
>     methods:{
>         
>     }
> })
> <template id="ID">
>     <tr>
>     	<td></td>
>         <td></td>
>         <td></td>
>     </tr>
> 	<tr>
>     	<td></td>
>         <td></td>
>         <td></td>
>     </tr>
>     </template>
> ```





##### 组件之间的通信

​		**自定义属性**

> props   声明组建的自定义属性  
>
> 通过props传递的数据只能使用不能修改
>
> props可以将父组件的实力传递给子组件

​		**自定义事件**

> $emit()   可以触发绑定到本组件上的事件
>
> 再自定义模块的最外层  声明自定义事件  再将自定义事件传递 到自定义属性 里面







作业：vue  99乘法表

轮播图封装组件

ajax的同步和异步

原型链和继承

hml  和xml 的区别

三次握手 四次挥手