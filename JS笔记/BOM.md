# BOM

Browser Object Model    浏览器对象模型

frames  目前被W3C弃用

history  历史信息

location  地址栏  
	 负责页面之间跳转
	 获取url地址栏之中的：
				参数（/s ？wd=参数&pn=页码值）
								参数之间用&隔开参数传递的格式是键值对
				协议
								常见的协议：http、https、ftp、pop3（邮件）、smtp
				端口号、
				域名										

navigator  浏览器版本

screen

DOM

## window对象介绍

1. window对象
   1. window.location    
      1. window.location该对象控制的是我们所在浏览器的位置
      2. window.location.herf  =“路径”这个属性最重要
                赋值：用来实现页面跳转
         
      3. window.location.search;//?+参数名+参数值   都给显示出来
      4. window.location.reloat(true);//reload 方法参数可选，参数类型：boolean
            表示重新加载页面
   2. window.history  （访问历史记录）
      1. back();
      2. forward();
      3. go();   1  表示 向前  -1 表示向后
   3. window.navigator
      1. uesrAgent
   4. window.onload:为什么要等到浏览器网页加载完成之后才执行js
                 在网页加载完成之后，架构才会出来，才可以加载js
   5. window.onresize:是一个事件，当窗口的尺寸发生改变的时候，就会触发该事件
   6. window.onscroll:是一个事件，当窗口滚动条发生改变的时候，就会触发该事件
   7. window.setTimeout:延时器，和下面的定时器相似
   8. window.setInterval:定时器
      - 进程：一个应用程序对应一个进程
      - 线程：一个进程可以包含若干子线程

