# NODE.js 03   mongodb

### 功能划分

1. 登录
   1. 前端
      1. 调用Ajax接口、传递参数
      2. 获取返回结果，根据不同的返回结构做页面处理
   2. 后端
      1. 提供Ajax接口
      2. 获取用户传递的信息  req.query  req.body
      3. 对数据做处理
      4. 返回处理结果   res.send({err:  ,msg:   ,});

### mongodb

- php   mysql  orcal    关系型数据库
- node   mongodb  nosql   ...        非关系型数据库（文档型数据库）

### 关键字

- mongodb     数据库名字
- mongod      cmd   命令  启动数据库
- mongo        cmd    命令   命令行操作数据库
- mongodb      node的一个插件    用来操作数据库
- mongoose    node的一个插件     用来操作数据库（mongodb的进阶版本）

### 安装mongodb  数据库

- windows
  - 下载安装  取消两个勾
  - mongod     缺少数据库文件
  - XXX  不是命令    环境变量配置   安装目录下的bin目录
  - show  dbs(database)  显示所有的数据库
  - db   查看当前数据库
  - use + dbname      
    - 创建一个数据库   临时库   默认不显示，在库里创建一个表
    - 或者选择一个已经创建的数据库
  - db.dropDatabase()    删除当前数据库

#### 集合（collection）   curd

- 创建
  - db.createCollections('name')
- 查询
  - show collections
- 删除
  - db.表名.drop()
- 修改

#### 文档    （数据）   document   curd

会自动创建主键       _id

- 插入数据
  - db.集合名.insert   (   document(一个对象)/整个对象/数组   )
  - 多条插入   可以以数组的方式进行  db.集合名.insert([{},{}])
  - db.集合名.save()   可以插入ID相同的数据   会覆盖之前相同的ID
- 查询
  - db.集合名.find()
  - 格式化输出    db.集合名.find().pretty()
  - limit()   限制两条
  - skip()  跳过两条     不论前后   先跳后截
  - 固值查询
  - 范值查询
  - 交际查询
    - db.集合名.find({$and:[{},{},{}]})
  - 并集查询
    - db.集合名.find({$or:[{},{},{}]})
  - 混合查询
  - 分页查询
- 修改         更新文档
  - db.集合名.update(  查询条件，改成什么样子，是否修改多条)
  - ​                                {name:{$gt:3}            {$set:{   }}      {multi:ture}
  - $  字符  都是内置的   
    - $set   
    - $lt   小于
    - $gt    大于
    - $e    等于
    - $ne     不等于
    - $get   大于等于
    - $lte     小于等于
- 删除
  - db.集合名.remove(     **{'_id':3} **   ,1 )



多表关联    关系型数据库

