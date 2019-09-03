# url  统一资源定位符

**统一[资源](https://baike.baidu.com/item/资源)定位符**（Uniform Resource Locator，URL）是对可以从[互联网](https://baike.baidu.com/item/互联网/199186)上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

## 历史

在因特网的历史上，统一[资源](https://baike.baidu.com/item/资源)定位符（URL）的发明是一个非常基础的步骤。统一[资源](https://baike.baidu.com/item/资源)定位符的语法是一般的，可扩展的，它使用ASCII代码的一部分来表示互联网的地址。一般统一[资源](https://baike.baidu.com/item/资源)定位符的开始标志着一个计算机网络所使用的[网络协议](https://baike.baidu.com/item/网络协议)。

统一[资源](https://baike.baidu.com/item/资源)定位符是统一资源标志符的一个下种。统一[资源](https://baike.baidu.com/item/资源)标志符确定一个[资源](https://baike.baidu.com/item/资源)，而统一资源定位符不但确定一个资源，而且还表示出它在哪里。



## 结构

基本URL包含模式（或称协议）、服务器名称（或IP地址）、路径和文件名，如“协议://授权/[路径](https://baike.baidu.com/item/路径)?查询”。完整的、带有授权部分的普通统一[资源](https://baike.baidu.com/item/资源)标志符语法看上去如下：协议://用户名:密码@子域名.域名.顶级域名:[端口号](https://baike.baidu.com/item/端口号)/目录/文件名.文件后缀?参数=值#标志

**第一部分**

模式/协议（scheme）：它告诉浏览器如何处理将要打开的文件。最常用的模式是超文本传输协议（Hypertext Transfer Protocol，缩写为HTTP），这个协议可以用来访问网络。 [1]  其他协议如下：

http——超文本传输协议资源

https——用[安全套接字层](https://baike.baidu.com/item/安全套接字层)传送的[超文本](https://baike.baidu.com/item/超文本)[传输协议](https://baike.baidu.com/item/传输协议)

ftp——[文件传输协议](https://baike.baidu.com/item/文件传输协议)

mailto——[电子邮件地址](https://baike.baidu.com/item/电子邮件地址)

ldap——[轻型目录访问协议](https://baike.baidu.com/item/轻型目录访问协议)搜索

file——当地电脑或网上分享的文件

news——[Usenet新闻组](https://baike.baidu.com/item/Usenet新闻组)

gopher——Gopher协议

telnet——[Telnet协议](https://baike.baidu.com/item/Telnet协议)

**第二部分**

文件所在的服务器的名称或IP地址，后面是到达这个文件的路径和文件本身的名称。服务器的名称或IP地址后面有时还跟一个冒号和一个[端口号](https://baike.baidu.com/item/端口号)。它也可以包含接触服务器必须的用户名称和密码。[路径](https://baike.baidu.com/item/路径)部分包含等级结构的路径定义，一般来说不同部分之间以斜线（/）分隔。询问部分一般用来传送对服务器上的数据库进行动态询问时所需要的参数。

有时候，URL以斜杠“/”结尾，而没有给出文件名，在这种情况下，URL引用路径中最后一个目录中的默认文件（通常对应于主页），这个文件常常被称为 index.html 或 default.htm

**http:    //    user    :    pass    @     服务器主机地址    端口号     路径**

http  ：  模式/协议

auto  ：us  ：  ps   用户名和密码   现在一般不写

host ：  1、服务器主机地址（hostname    IP/域名）    2、端口号

path ：  1、pathname       2、search（get  请求query   post请求search）

hash  :  #



url.parse('http://www.bsidu.com:2000/index.html#tap')



##### queryString

内置模块  queryString

qs.parse(query参数  将字符串转换为字面量 ，参数2 ，参数3)

qs.stringify(query参数   将字面量转换为字符串)

##### path

内置模块   path

__dirname   获取当前文件夹的绝对路径

path.join(a,b,c,d...)   将所有的路径进行只能拼接     

node中  写文件的路径要求用绝对路径     

