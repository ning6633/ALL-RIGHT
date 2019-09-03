# CSS3的渐变

兼容模式  和   标准模式

## 线性渐变

兼容模式的前缀要加在属性值前面，    在方向上面兼容模式不加  to  方向是写哪儿从哪儿开始加载

#### 方向渐变

语法：  background：linear-gradient（dirction，color-stop1，, color-stop2...）；
	

to left、to right、to top、to bottom、to left top、to left bottom、to right top、to right bottom

​			div { background:linear-gradient(to left, red , blue) } 

​			div { background:linear-gradient(to right, red , blue) }

​			div { background:linear-gradient(to bottom, red , blue) } /* 浏览器默认值 */ div { background:linear-gradient(to top, red , blue) }

#### 角度渐变

div
{ background: linear-gradient(10deg, red, blue) }

角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，

0deg将创建一个从下到上的渐变，90deg将创建一个从左到右的渐变

兼容模式= 90deg - 标准模式 

## 径向渐变

只有兼容模式   要加前缀

background:radial-gradient(center, 							````````````````````````````````````````````````````````````````````, size, start-color, ..., last-color);

center：渐变起点的位置，可以为百分比、像素，默认是图形的正中心   
shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse，如果元				素形状为正方形的元素，则ellipse和circle显示一样
size：渐变的大小，即渐变到哪里停止，它有四个值。
			closest-side：最近边；
			farthest-side：最远边；
			closest-corner：最近角；
			farthest-corner：最远角

## 重复渐变

##### 重复线性渐变

{ background: repeating-linear-gradient(red,
yellow 10%, green 20%); }

10%的位置为yellow，20%的位置为green，然后按照这20%向下重复

##### 重复径向渐变

background:repeating-radial-gradient(red,yellow 10%, green 20%); 