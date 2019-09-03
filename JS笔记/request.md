# request

**第三方插件 require**     读取网络上的数据信息

```javascript
const _request=require('request')
_request('网址',(_error,_response,_body)=>{
    console.log(_error)  //返回的错误信息
    console.log(_reponse)  //所有的返回结果  包含配置信息
    console.log(_body) //最终的目标信息 html 网页
    const fs=require('fs')//使用内置模块，创建一个文件，将body写入
	fs.writeFile('./name',_body,(_error)=>{
        console.log(_error)
    })
})

```

第三方模块 cherrio  用来读取——body里面的标签

