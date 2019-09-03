# css盒子模型

 盒模型是CSS布局的基石

**盒子模型的组成部分**：`边框`、`边界`、`补白`、`内容区`

### 相关属性

#### padding（填充）

​	padding：内间距
​		1、padding可以设置盒子和内容之间的距离
​		2、盒子边框线里面的距离都是padding
​		3、设置padding后会让盒子变形，如果想盒子的大小不变，加了多少padding就在宽度和高度上减去多少padding
​		4、可以设置单一方形的某个padding：padding-left /  right  /  top  /  bottom
​		5、padding不可以设置负值
​		6、padding不会影响背景图片的显示效果	

​	盒子里的内容到盒子边框的距离是内边距
​		会把盒子撑大

​	在设定页面中一个元素内容到元素的边缘（边框）之间的距离。也称补白。

​		1、用来调整内容在容器中的位置关系
​		2、padding是额外加在元素原有大小之上的，如想保证元素大小不变，需从元素宽或高上减掉后添加padding的属性值
​		**属性值得4种使用方法**：
​					一个值：四个方向
​					两个值：上  下      
​					三个值：上        左右     下
​					四个值：  上    右     下     左     （顺时针方向）
​					可设置成一个方向填充： padding-top、padding-right、padding-bottom、padding-left

#### margin

​	盒子边框到边框的距离
​	1、可以设置盒子与盒子之间的距离
​	2、边框线以外的距离都是外边距
​	3、外边距的设置方式
​						4种：上   右  下  左 
​	4、外边距可以设置负值
​	5、设置块元素位置的水平居中margin：0  auto；
​	6、margin的常见bug
​					1>   margin的重叠问题
​						当上下的两个盒子之间都设置margin的时候，margin的值会重叠，谁的值大设置谁   margin的左右距离会相加
​					2>   margin-top的传递问题
​						父元素下的第一个子元素设置margin-top的时候，这个margin-top值会给父元素设置
​										解决方法：父元素下加上：border、padding、float：left；、``overflow：hidden；`` (超出的内容隐藏) 子元素下加上：float：left；




​	在元素外边的空白区域，被称为边距
​	上下左右同padding

### 盒子的实际大小

总高度：width+上下padding+上下border

​		

