# HTML-标签（双标签、单标签）    列表属性

<!DOCTYPE html>
<html>
    <heat>
        <meat lang="UTF-8">
            <title>标题栏内容</title>
    </heat>
    <body>
        </body>
		</html>
</!doctype>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meat = "UTF-8">
            <title>这是标题栏</title>
    </head>
    <body></body>
	</html>
</!doctype>

​					双标记：<标签  属性="属性值">   </标签>
​					单标记：<标签   属性="属性值" >				
-->

## <!DOCTYPE html>
<html>
    <head>
        <meat >
    </head>
    <body></body>
	</html>
</!doctype>

（h1~h6）
<body>

<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>

</body>
h1  有唯一性。即同一个页面只能出现一次，用来放网站的LOGO

<i>文本倾斜标签</i>
<em>文本倾斜标签</em>
<b>文本加粗标签</b>
<strong>文本加粗标签</strong>
<u>下划线标签</u>
<em></em>><strong></strong>      着重表现标签，在显示上没有区别
<br/> 强制换行符

<hr/>水平线符

这是上标签<sup>这是上标签</sup>
这是下标签<sub>这是下标签</sub>

<p>这是段落标签，            默认有段间距</p><p>这是段落标签，&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认有段间距</p><p>&copy;&copy;&gt;&lt;&gt;&lt;</p>

html中常用的转义字符：
					☞&nbsp:     不换行空格
					☞&gt:          >右尖括号
					☞&l t:          <左尖括号
					☞&copy:      备案中图标版权

## 列表属性

### 无序列表

<ul>
    <li>ctrl+z+鼠标选中   可以同时操作多个li</li>
    <li>无序列表符号</li>
    <li>默认的东西一般情况下都会删掉  比如：这个列表符号</li>
</ul>

​		大部分情况下使用的是ul

### 有序列表

<ol>
     <li>ctrl+z+鼠标选中   可以同时操作多个li</li>
    <li>无序列表符号</li>
    <li>默认的东西一般情况下都会删掉  比如：这个列表符号</li>
</ol>

### 自定义列表

<dl>
    <dt>名词</dt>
    <dd>对名词的解释</dd>


</dl>



<ol  type = "1" start="5">
	<li>ctrl+z+鼠标选中   可以同时操作多个li</li>
	<li>无序列表符号</li>
	<li>默认的东西一般情况下都会删掉  比如：这个列表符号</li>
</ol>

  <ol  type="5">

  </ol>

</ol>

<!--type:规定列表中的列表项目的项目符号的类型
			1 数字顺序的有序列表（默认值）（1、2、3、4）
			a 字母顺序的与序列表，小写（a、b、c、d）
			A 字母顺序的有序列表，大写（A、B、C、D）
			i 罗马数字，小写（i、ii、iii、iv）
			I 罗马数字，大写（I、II、III、IV）
	-->
语法：<ol  type="a">  </ol>

start  属性规定有序列表的开始点。（**start的属性值必须是数字**）
语法：<ol start="5">  </ol>

## 超链接

<!DOCTYPE html>
<html lang="en">
    <head>
        <meat charset="UTF-8">
            <title>这里转跳到百度</title>
    </head>
    <body>
        <a href="hppt://www.baidu.com" target="_blank"title="这是一个超链接">转跳到百度</a>
        </body>
</html>
</!doctype>
语法：<a href ="hppt:www.baidu.com“>这是跳转到百度</a>
<!--

​	target（目标）属性
​		属性值：
​					_self_(下划线self):    在当前页面打开链接，次为默认值。
​					_blank_(下划线blank)：   在新窗口打开链接，会保留原窗口

​	title属性：作用：提示信息！（一般的标签都适用title）

-->

## 导入图片

img 标签（单标签）
**src：属性值为：导入图片的路径**
border：添加边框
widht:图片的宽度
height：图片的高度
title：提示图片的信息
**alt：文本替换图片（当文本损坏或图片加载不出来的时候，显示alt中的文本）**

<!DOCTYPE html>
	<html lang="en">
        <head>
            <meat="UTF-8">
                <title>导航栏标题</title>
        </head>
        <body>
            <a href="www.baidu.com" targeet=“_blank” title="surprise-mother-fucker">你猜这是什么</a>
            <img src="C:\Users\MI\Pictures\高清壁纸Z\极可爱的小盒子壁纸/极可爱的小盒子壁纸-33.jpg" alt=“便于优化的选项（不可以省略）”>
            <!--src属性：属性值为导入图片的路径
				border:添加边框-->
            </body>
        </html>
 <!--
	相对路径：
					1、同级找同级：直接书写名称
					2、上级找下级：文件夹名称  /   目标文件
					3、下级找上级：../(返回上一级)目标文件
					4、分别在两个同级的文件夹内：下级找上级、上级找下级（../文件夹名称  /  目标文件）

-->

## 表格（显示数据）

1、表格结构
2、表格标记
3、表格中行标记
4、表格中单元格标记

网页的布局顺序：自上而下，从左到右。是指板块

div标签：没有具体意义，划分板块
语法：<div></div>

span标签：渲染短小文本
语法：<span></span>

Ctrl+D：多选

table（双标签）:表格语法

<!DOCTYPE html>
<html>
    <head>
        <meat = "UTF-8">
            <titlr>这是表格语法</titlr>
    </head>
    <body>
        <table width="10";height="50";border="1";bordercolor="blank">
            <tr>
                <td>第一行第一列</td>
                <td>第一行第二列</td>
                <td>第一行第三列</td>
            </tr>
            <tr>
                <td>第二行第一列</td>
                <td>第二行第二列</td>
                <td>第二行第三列</td>
            </tr>
            <tr>
                <td>第三行第一列</td>
                <td>第三行第二列</td>
                <td>第三行第三列</td>
            </tr>
        </table>
        </body>
</html>

</table>
tr:代表行
td:代表列

width:  "表格的宽度"
height:  "表格的高度"
border:  "表格的边框"
bordercolor:  "边框色"

cellspacing:  单元格与单元格之间的距离  一般设置为0
cellpading:   单元格与内容之间的距离
（一般两个都设置为0） 

align:水平对齐方式 left  right   center
valign:垂直对齐方式 top  bottom  middle   一般改

#### 合并单元格

合并原则：只要是跨行的是合并行！跨列的就是合并列
					无论合并行还是合并列都是操作td
合并行：rowspan="所合并的行数"
合并列：colspan="所合并的列数"
和谁合并就删谁

<!DOCTYPE html>
<html>
    <head>
        <meat="UTF-8">
            <title>合并单元格</title>
    </head>
    <body>
        <table wigth="300";height="100";border="1";bordercoler="blank";cellspacing="0";cellpading="0";>
            <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
            </tr>
            <tr>
            	<tdr colspan="3";>1</td>

            </tr>
            <tr>
            	<td colspan="3";>a</td>
    
            </tr>
            <tr>
            	<td colspan="3";>a</td>
    
            </tr>


        </table>
        </body>
</html>
</!doctype>





