# CSS  3   的3D属性

### 建立3D空间

transform-style：preserve-3d；

## 景深

​	近大远小
父元素：perspective：1000px
子元素：transform：perspective（1000px）

## 3D的位移translate3d（tx，ty，tz）

transform：translate-3d（tx，ty，tz）；
transform：translateZ（    ）
在Z轴上进行移动，并且Z轴的值不能是 百分比

## 3D的旋转

transform：rotate-3d（X，Y，Z，a）；
X:0-1     
Y：0-1
Z：0-1
a：是一个角度值，用来指定元素在3D空间旋转的角度，正顺 负逆    单位deg
transform：rotateZ( )；

## 3D的缩放

transform：scale-3d（X，Y，Z）；
tranform：scaleZ（）；
3D的缩放需要配合其他属性一起使用才有效果

