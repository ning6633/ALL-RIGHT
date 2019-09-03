# 文件夹的  curd

*const* fs = require('fs')

**模块的创建、调用、使用**

```javascript
*const* _results=require('./module');

*console*.time();

 const _result=fs.readFile('./nnn.txt',(_req,_res)=>{

​    

​    console.log(_res.toString());

 });

const _result=fs.readFileSync('nnn.txt');

console.log(_result);

console.timeEnd();

console.log(1)

_results.send()

_results.moment()
```



**异步的错误的回调优先    回调函数的第一个参数的hi错误**

* 在执行异步的过程中  一旦出现错误  会将错误对象付给第一参数 所以叫错误的回调优先  错误对象并不会阻止代码的执行  只有当代码出现错误时 错误才会付给错误对象

**判断文件类型**

```javascript
fs.stat('./haha',(_error,_data)=>{
    console.log(_error)
    console.log(_data.isDirectory())  //判断文件是否是文件夹
    console.log(_data.isFile())  //判断文件是否是文件类型
})
```



**文件夹的异步创建**

fs.mkdir('./mkdir',(err)=>{

​    console.log(err)

})

**文件夹的同步创建**

fs.mkdirSync('mkdirSync')

**文件夹的异步删除,**只能删除空的文件夹，又能内容的文件夹删除不了

fs.rmdir('mkdir',(_error)=>{

​    console.log(_error);

})

**文件夹的同步删除**

fs.rmdirSync('mkdir')

**文件夹的异步读取**

读取文件夹下面的文件  返回值是一个对象

fs.readdir('mkdirSync',(_error,_data)=>{

​    console.log(_error,typeof _data);

})

**文件夹的同步读取**

let _txt=fs.readdirSync('./mkdirSync');

console.log(_txt);

**文件夹的异步修改**

fs.rename('./mkdirSync','najiuzheyangba',(_error)=>{

​    console.log(_error)

})

**文件夹的同步修改**

fs.renameSync('najiuzheyangba','mkdirSync')

**文件的异步创建**  write  覆盖写入  append  累加写入

fs.writeFile('./haha.txt','那就这样吧',(_error)=>{

​    if(_error){

​        console.log("失败")

​    }else{

​        console.log("成功")

​    }

});

fs.appendFile('./haha.txt','what',(_error)=>{

   console.log(_error)

})

**文件夹的异步读取**  buffer 表示读取文件的数据流  是二进制的数据流  要通过 toString() 转换为字符串  utf8 是默认值

fs.readFile('./haha.txt',(_error,_data)=>{

​    console.log(_error)

​    console.log(_data.toString())

})

**文件夹的异步删除**

fs.unlink('./haha.txt',(_error)=>{

​    console.log(_error)

})