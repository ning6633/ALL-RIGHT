# CSS3

是在以前的版本里加了点东西

-webkit-  浏览器前缀

## 渐进增强和优雅降级

渐进增强：progresslve  enhancement    由低版本浏览器向高版本浏览器做
优雅降级：graceful  degradation  先做高版本的浏览器 ，再兼容低版本浏览器

## CSS3选择器

### 属性选择器

1、E【attr】   只使用属性名，但没有确定任何属性值
2、E【attr=“value”】   指定属性名，并指定改属性的属性值
3、E[ attr~="value" ]        选择有多个声明的词列表中的一个
4、E【attr^=“value”】    选中每一个词列表的开头
5、E【attr$=“value”】   选中每个词列表的结尾
6、E【attr*=“value”】  只要相同的有，就选中
7、E【attr|="value"】  仅仅是词列表以   -   链接时可以识别

### 伪类选择器

#### 1、结构性伪类选择器

**父元素下只有一种类型的子元素  child**      先找位置    再找类型

x：first-child   匹配子集的第一个元素
x：last-child  匹配父元素的最后一个X元素
x：nth-child（n）指哪儿变哪儿   指定值   或者偶数奇数  或者隔几行
x：only-child   用的少   选取父元素仅仅只有一个子元素的块  
x：nth-last-child（n）  从最后一个开始索引

**父元素下有两种或以上子元素    of-type**   先找类型  再找位置

x：first-of-type  
x：last-of-type
x：nth-of-type
x：only-of-type
x：nth-last-of-type(n)

：root    匹配根元素   选择的是根元素html     

X：empty    没有任何子元素（包括文本、空格）的元素

#### 2、目标伪类选择器

E：target        选择匹配E的所有元素，且匹配元素被相关URL指向
						链接指向锚点  锚点url  target   类似于a链接的划过变色
		transition  ：2s；滑动的时间

#### 3、UI元素状态伪类选择器

E：enabled   form表单里  处于可用状态的  E 元素
E：disable    form表单里  处于禁用状态的   E  元素
E：checked   form表单中  选中状态的  E  元素   input配合使用
E：：selection   E  元素中被用户选中或处于高亮状态的  部分
			文本选中状态的样式      只能改变背景颜色和字体颜色     有两个冒号

#### 4、语言伪类选择器

：lang
eg：E:lang(language)表示选择匹配E的所有元素，且匹配元素指定了lang属性，而且其值为language

#### 5、否定伪类选择器

E：not（标记名）      除了自己  全部被选中

#### 6、动态伪类选择器

E：link
E：visited
E：hover
E：action
E：focus      贯标在哪儿  样式在哪儿

#### 7、层级选择器

E>F   父子选择器    只能选儿子
E+F    相邻兄弟选择器    只能通过哥哥选一个弟弟        同级
E~F     通用选择器  （所有兄弟选择器）    通过哥哥选择所有弟弟        同级

### CSS3的属性

#### 前缀

| **前缀** | **实例**           |                           **说明**                           |
| :------: | ------------------ | :----------------------------------------------------------: |
|   -ms-   | -ms-box-shadow     |             IE浏览器专属的CSS属性需添加-ms-前缀              |
|  -moz-   | -moz-box-shadow    | 所有基于Gecko引擎的浏览器（如Firefox）专属的CSS属性需添加-moz-前缀 |
|   -o-    | -o-box-shadow      |            Opera浏览器专属的CSS属性需添加-o-前缀             |
| -webkit- | -webkit-box-shadow | 所有基于Webkit引擎的浏览器（如Chrome、Safari）专属的CSS需添加-webkit-前缀 |



#### text-shadow：2px  2px  2px  red   文本阴影

text-shadow：水平阴影    垂直阴影   阴影模糊距离   阴影颜色

#### box-shadow：10px 10px  5px 10px #888888 inset；盒子阴影

和背景颜色一样可以设置多个

| *h-shadow* | 必需的。水平阴影的位置。允许负值             |
| ---------- | -------------------------------------------- |
| *v-shadow* | 必需的。垂直阴影的位置。允许负值             |
| *blur*     | 可选。模糊距离                               |
| *spread*   | 可选。阴影的大小                             |
| *color*    | 可选。阴影的颜色。                           |
| inset      | 可选。从外层的阴影（开始时）改变阴影内侧阴影 |

#### border-radius  圆角边框

.div1{

​                border-radius:10px 20px 30px 40px/40px 30px 20px 10px

  }

按顺时针的顺序，斜杠/左边是四个圆角的水平半径，右边是四个圆角的垂直半径，但是通常我们很少写右边的参数，那就是默认右边等于左边的值。

#### background背景尺寸

##### 1、Background-origin 背景原点

​		padding-box：背景图片填充框的相对位置
​		border-box：背景图片 边界框的相对位置
​		content-box： 背景图片内容框的相对位置
​    默认值为：padding-box

##### 2、Background-clip 背景裁切

​		padding-box：背景颜色填充框的相对位置
​		border-box：背景颜色 边界框的相对位置
​		content-box：背景颜色 内容框的相对位置

 默认值为：border-box

##### 3、Background-size 背景尺寸

属性值：lengh     规定图片的大小    第一个值为宽度    第二个值为 高度
				percentage      以百分比为值  设置图片大小
				cover     把背景图扩展到父元素大小，但是以原比例显示，图片显示不完整，会超出父元素
				contain     把图片扩展到盒子最大，图片比例不变，但会显示不完整，不会超出父元素

##### 4、CSS多背景属性

background：url（），url（），url（）；     颜色要在最后一层加

### 文本换行的相关属性

#### word-wrap

normal      只在允许的断字点换行【浏览器默认】
dreak-word     智能换行   尝试把显示不下的内容移到第二行显示，第二行显示不下才会换行

#### word-break

break-all      粗暴换行   不会试图将文本换到下一行，看是否可以放下  会【直接换行】

### 颜色设置方式

用色调、饱和度、亮度  

1、rgba
2、hsl
3、hsla

#### border-image

**border-image                    是一个复合属性**

border-image-source       用在边框的图片的路径。【插入图片】

border-image-slice 		 图片边框向内偏移(不加单位)。

border-image-repeat	  图像边框是否应平铺(repeat)、铺满(round)或拉伸(stretch)

border-image-outset	  边框图像区域超出边框的量(值是一个倍数)

<nav>
				<article>
					<input type="text" placeholder="中国刑警803第二" />	
					<input type="submit" />
				</article>
				<article></article>
			</nav>