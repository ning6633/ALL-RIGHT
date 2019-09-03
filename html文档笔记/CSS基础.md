# CSS基础

**cascading  style  sheet**   **层叠样式表**

1988.5.21  css 2.0

语法：选择符  {  属性：属性值； 属性：属性值：}

1、每个css样式由两部分组成：   ***选择符***   和   ***声明符***

2、属性放在花括号里面，属性和属性值用    ：   隔开    用  ： 结束

3一个属性有多个属性值时，  属性值用  **空格** 隔开 ，属性值之间不分先后顺序

**样式的创建（内部样式  外部样式   内联样式）**

**内部样式**    语法：< style  type="text/css">

​										/*css语句*/

​									< /style>

​					*使用 style 标记创建样式时，最好将该标记写在< hesd>< /hesd>*

**外部标签之 link 标签引入**

​	**方法一**：外部样式表的创建：

​					< link rel="stylesheet" type="text/css"  href="  目标文件的了路径及文件名全称 ****">        

​					说明：使用 link 元素导入外部样式表时，**需要将该元素写在头部**   rel(relation):用于定义文档关联，标识关联样式；  type：定义文档类型

**外部样式之import**

< style type="text/css">

​					@import  url（目标文件的路径及文件全名称）；

< /style>

​			**@和import之间没有空格     url和小括号之间没有空格；  结尾必须以  ；  	结束**

**内联样式**

​		< div  style="width;200px;height:400px;">< /div>

elements: 元素
sources：路径