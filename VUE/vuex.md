# vuex

### 特点

1. 多组件共享状态  （ 一个变量在所有的组件里都可以使用）
2. 一个组件发生改变其他组件自动改变 （必须按照规定的程序修改）

### 核心

1. state 全局状态（全局变量 state 里的数据在所有的组件都可以使用）
2. mutation  一个对象存一堆方法
3. vuex中规定，想要修改state里的值，就必须通过mutation里的方法
4. $commit  用来触发mutation里的方法
5. commit有两个参数，commit { '要出发的事件'，传递的数据 {name：‘zhangsan’} }
6. active 异步处理
   1. dispath触发active  在active做异步请求。通过commit触发mutation来修改state
7. getters  派生属性   （vuex的计算属性）

mapState   可以直接将state的值映射到计算属性里面

