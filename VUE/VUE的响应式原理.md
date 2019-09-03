# VUE的响应式原理

vue中  data  数据在生命周期被初始化的时候，  会用Object.definePropty进行处理。因此  data  里的数据会被赋予  set  和   get   方法。在正常情况下，数据获取时会触发  get  ，数据修改时会触发  set  。在数据修改时，会优先触发set，触发watcher监听，再通知界面更新。

VUE中如果动态添加属性，那么这个属性没有  set  和  get  方法

xxx.vue    单文件组件

图片   public  base64

vue中引入图片

1. 路经引入
   1. url=路径
      1. 绝对路径
      2. 相对路径
2. 变量引入
   1. url=变量
      1. 绝对路径
      2. 相对路径要用import引入