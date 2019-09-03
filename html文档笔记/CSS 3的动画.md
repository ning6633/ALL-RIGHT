# CSS 3的动画

## animation

不需要事件触发     开始和结束必须要写

@keyframes   mymove{  from/  0%{ }         to/100%{ }   }

**animation-name  触发对象名称【必须写】**

**animation-duration    动画持续时间【必须写】**

**animation-timing-function**【移动速度】

**animation-delay【延迟执行时间】**

**animation-iteration-count:infinite | number**【循环次数】

​			infinite：无限循环
​			number：循环次数

**animation-direction：normal、reverse、alternate、alternate-reverse；【运动方向】**

​	normal：正常方向
​	reverse：反方向运行
​	alternate：动画先正常运行再反方向运行，并持续交替运行
​	alternate-reverse：动画先反运行再正方向运行，并持续交替运行

**animation-play-state  【运动状态】**

​		 running:运动
​		 paused: 暂停

​		一般配合鼠标移动出现暂停

**animation-fill-mode:none\forwards(停在执行完的位置)、backwards（停在第一帧的位置）、both（同2）;**

动画运动之后的位置

### animation：1、名字   2、持续时间    3、速度  4、 延迟时间   5、 执行的次数   6、运动方向7、运动状态 8、完成运动后的位置

一、通过关键字@keyframes  创建动画
二、   通过animation  触发动画  开始运动