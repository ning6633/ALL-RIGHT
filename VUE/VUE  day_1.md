# VUE  day_1

##### 框架

1. angular
   1. 谷歌  
   2. mvc  一种思想   双向数据绑定  model  view  controa
   3. 现在也添加上了虚拟DOM
2. react
   1. facebook
   2. 虚拟DOM
3. vue
   1. 尤玉溪
   2. mvvm  model  view  view-model   既有双向数据绑定又有虚拟DOM

##### 前端效率优化

> 最致命的问题就是DOM操作，解决办法就是尽量减少DOM操作

##### 虚拟DOM

> 虚拟DOM就是内存中的一个变量，是一个对象结构

##### vue的特点

用域构建用户界面的渐进式框架

vue将开发者的精力从DOM操作转移到了数据操作上，从而数据变 对象变

1. 高效
   1. 虚拟DOM  页面渲染高效
2. 

##### 使用

1. 用**script** 标签引入 需要声明 let vm=new  Vue({     })

2. **vm**   v：可视内容  m：数据模型

3. **el**：绑定一个DOM    该元素的内部 用vue 方法解析

4. **data**： data里的数据可以通过插值法    {{}}     绑定到界面上，也叫数据绑定。从数据到视图

   1. 可以使用三木进行简单运算

5. **methods**：方法     写function 

6. 将DOM元素通过指令和数据绑定，通过操作数据来改变DOM元素

7. 传参

   1. 默认参数是事件对象  **MouseEvent** 
   2. 但是如果有其它参数，默认事件就需要通过**$event**来手动传递

8. 列表渲染 **list**

   1. ```javascript
      <li  v-for = " hehe   in(关键字) list">{{heh}}</li>
      ```

   2. item    循环的每一项   list  是data里面的数据

tyoeof 的返回类型  

### 指令

#### 内置指令

- v-if：条件渲染   写在内部    v-if =  “ 表达式 ” 结果为真 渲染  为假不显示，是直接控制元素的有无
- v-show :      v-show =  “ 表达式 ” 结果为真 渲染  为假不显示，是控制元素显示还是不显示     都有元素
- 如何修改data里的数据
  - vue中 通过  v-on:方法名（）   
  - 触发函数写在 vue 中的配置项 methods 中

空格占位     父元素fz=0  子元素再变回来

v-if    

```javascript
<div id="qqq">
        <button @click="dianji"></button>
        <div v-if="sel" class="pao"></div>
    </div>
    <script type="text/javascript">
        let vm = new Vue({
            el:'#qqq',
            data:{
                sel:true,
            },
            methods:{
                dianji(){
                    this.sel=!this.sel;
                }
            }
```



v-else

v-elseif

##### 属性绑定：v-bind   可以让元素属性和变量表达式结合

```javascript
v-bind : class="data变量"
v-bind : style= ""
v-bind : src= ""
v-bind 的简写  ：
```

##### 事件修饰符：.stop    .else    .once

##### 按键修饰符：@keyup.enter/.esc/.left/.top

##### 双向数据绑定：v-model     m-v  数据到视图   v-m  视图到数据

#### 自定义指令

directive  指令

###### 创建一个自动聚焦的指令

```javascript
Vue.directive('name',{
    inserted(el){
        //el  就是指令绑定的元素
    }
})
```





作业：选项卡

todolist待办事项列表

