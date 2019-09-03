### css文本属性

1、**font-size**（字体大小）
		font-size：value（数值）；

​		px：
​		pt：印刷领域
​		em：为父元素像素值的倍数     
​		不设置时，默认为16px                16px=12pt

2、**color**（颜色）
		color：#十六进制数；            十六进制： o-f
		color：rgba（   ，  ，  ，透明度）；       red  green  blue     a（透明度）的范围：0-1
		单词、16进制数紫颜色、rgb、rgba

3、**font-family**（字体）
		font-family：“     ”；   单个单词的英文不用加引号，多个单词或者中文的时候要加引号

4、**font-weight**（加粗）
			font-weight：bolder / bold /  normal（正常）/ 100-900；
			取值范围“100-900
			100-400：一般细      500：常规     600-900：加粗

5、**font-style**（倾斜）
			font-style：italic  / oblique / narmal；
			italic☞一种字体的倾斜字体    oblique☞如果一种字体没有倾斜字体就用oblique来倾斜他的字体     narmal☞恢复正常													

6、**text-align**（水平对齐方式）
						text-align：left / right / center / justify；
						*只能对块元素使用*  原因：行内元素显示的色块是由文本撑起来的所以不存在对齐
						justify ：两端对齐  一般用于中英文混合 （多出的一个字节位  这一行平分）

​			块元素：（ h1~h6    p    div    列表标签）
​						1、独占一行，自动换行
​						2、可以设置宽、高
​						3、可以包裹块元素和行内元素（但是个别元素除外  譬如 h标签、p标签、dt）		
​			行内元素：（a   b  string   em   i   input）
​						1、一行显示多个，不会自动换行
​						2、不识别宽、高
​						3、行内元素只能嵌套行内元素

7、**line-height**（行高）
			行高包含字体大小
			文本是否大小写：font-variant：    取值为normal     small-caps：小型的大写字母
			控制文本大小写：text-transform   none：默认值、 capitalize（首字母大写  根据空格来区分）、uppercase（大写）、lowercase（小写）
			mormal：默认值

8、文字**font**简写属性
			font：20px   “字体字体”
			font：加粗   倾斜   **字号**  行高  **字体**    <u>字号和字体必须写</u>
			font-style   font-weight   font-size / （line-height  font-family）（后面两个不能换位）

9、**text-decoration**(文本的修饰 下划线)
			text-decoration：none /  underline  /  overline  / line-through；

10、**text-indent**(首行缩进)
			text-indent：value；  
			value  的单位一般设置为em     只对第一行起作用 
			 value的值可以设置为负值    设置为负值时，内容会溢出文本区域，可以用来隐藏内容。

11、**letter-spacing**（字间距）
			letter-spacing：value；	

### CSS列表属性

#### 1、**list-style-type**（列表符号）

​			disc（实心圆）/ circle（空心圆） / square（实心方块）  /   none（去掉符号列表）
​			<u>list-style-type：none；===list-style：none；</u>

#### 2、**list-style-image**（使用图片作为列表符号）  

​			一般不用
​			list-style-image：url（使用图片的路径及全称）；

#### 3、**list-style-position**（定义列表符号的位置）

​			也不用
​			list-style-position：outside （外面）/ inside（里面）；

### CSS背景属性

#### 1、**background-color**（背景颜色）

​			background-color：颜色；

#### 2、**background-image**（背景图片）

​			background-image：url（背景图片路径及全称）；
​			背景图片的显示依赖于 背景盒子的大小
​					

#### 3、**background-repeat**（背景图片平铺）

​			background-repeat：no-repeat  /  repeat  /  repeat-x  /repeat-y；

#### 4、**backgroud-position**(背景图片的位置)

​			backgroound-position：left  /  right  /  center  /数值（一个单位像素）      top  /  center  /bottom   /数值（一个单位像素）  ；

#### 5、**background的缩写**

​			background：没有顺序要求但是   水平位置和垂直位置属性不可以分开  而且当他们都是center时，可以只写一个；

#### 6、**background-attachment**

​				选择符{ background-attachment：scroll   |  fixed  ；}
​				scroll：背景图片随对象内容滚动
​				fixed：  不随对象移动

### CSS边框属性

#### **☞  border**

​		border：5px   solid   #ffffff；
​		border-width：边框宽度  
​					可以单独设置一方的边框：border-width：上   右   下   左；顺时针旋转一圈里面为		设置属性值时，会属性上下渲染，左右渲染，但是超过三个值时，属性会按顺时针方向进行赋值

​		border-color：边框颜色
​		border-style：solid（实线） dashed（虚线） double（双线） dotted（点线） ；
​									solid                dashed                  doble                    dotted

​		可以单独设置一方的边框：border-width：上   右   下   左；顺时针旋转一圈
​				1个值：上下左右
​				2个值：上下
​				3个值：a上  b左右   c下
​				4个值：上右下左
​		border-left  /  border-right  /border-top   /border-bottom   
​		取消边框：border-left/right/top/bottom：none；

## 浮动

float：让块元素按规定排列
		float：left / right / none；
		在父元素边上开始依次排列，
		left：元素浮动 在文本左边
		right：右浮动
		none：中间浮动

浮动：元素浮动后会脱离文档流（但是只会脱离半层），会影响下面的正常元素
			不在一个块元素里浮动不影响
			父元素宽度不够时会换成下一行

clear：清除浮动
		none（允许有两边浮动）
		both：清除两边浮动
		left：清除左边浮动
		right：清除右边浮动

文档流：每个元素都有自己所在的位置块元素是上下排列，内联元素是左右排列

元素浮动后就不遵循文档流，就不占位了。块不占位，内容占位

#### 盒子的大小

​	总宽度：width+左右padding+左右border
​	总高度：height+上下padding+上下border