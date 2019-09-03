# DOM

getElementById（“”）：获取id 为“”的元素

getElementsByTagName("")：获取标签为“”的标签   返回值是集合

getElementsByClassName("")：获取class名为“”的元素，返回值是集合

getElementByName("");    表单元素获取方法    input 的 name 名

### DOM

- DOM元素：查询
  - getElementById():通过ID获取HTML中的元素，返回值是一个元素
  - getElementsByTagName()：通过标签名称获取HTML元素，返回值是指定范围中相同标签名称所有元素的集合。可以使用数组的地方式遍历。
  - getElementsByClassName()：低版本的IE不兼容：(60-80)
  - getElementsByName()：低版本的IE不兼容
- DOM元素：创建
  - createElement();创建元素，参数是字符串类型而且得是HTML元素的标签名称   添加的名字是字符串类型，返回值是：HTML元素。
- DOM元素：增加
  - appendChild();//向指定的元素中添加子元素|子节点。该方法的参数必须是HTML节点类型值    添加在最后
  - insertBefore( 新元素，选择的元素);//向指定的元素中某个元素之前添加子节点|子元素，参数有两个，都是HTML元素类型  添加在最前
- DOM元素：删除
  - removeChild();//从指定的元素中移除子元素|子节点，返回值是被删除的元素
- DOM元素：替换（修改）
  - replaceChild()  属性变化、文本内容的变化、子元素变化、CSS的变化 

### DOM属性节点操作

- 创建属性节点：document.createAttribute();
- 获取属性节点的值：getAttribute();//可以支持非标准的属性节点。
- 添加、修改DOM属性节点：setAttribute()|setAttributeNode();//可以支持非标准的属性设置
- 移除属性节点：removeAttribute();

------

### 文本节点操作

- 创建：document.createTextNode();//参数就是文本类型，也就是字符串类型

------

### 非行内样式的兼容

- 非
- 行内样式的兼容
- window.getComputedStyle(h3, '::after').content //非IE获取外部样式表的方式
- document.getElementById("demo").currentStyle["attribute"]//IE获取外部样式表的方式
- 有连接符“-”的属性   用小驼峰命名法

------

### 获取兄弟节点

- previousSiblings()//获取前一个兄弟节点
- nextSiblings()//获取下一个兄弟节点

------

### 获取子、父节点

- firstChild：获取第一个子节点
- lastChild：获取最后一个子节点
- childNodes:子节点包含（空白文本和普通文本）节点
- children:子节点不包含文本节点
- parentNode:父节点

### 文档碎片节点

​		document.createDpcumentFragment   先在文档节点中加载完成  最后再在body中一起渲染，有利于图片在网络上的加载速度

### 克隆节点



1. ```javascript
   var a=document.getElementByTagName("div");
   var b=a.cloneNode(true|false);
   ```

   true  表示深度克隆，将元素内的所有内容全部克隆
   false  表示浅克隆，将元素的外层克隆下来

### 常用的属性

- offsetLeft：获取元素绝对定位的left值
- offsetTop：获取元素绝对定位的top值
- 以上两个属性获取相对于父元素的定位边距。margin-left,margin-top也会影响这两个属性的值。
- clientWidth：获取元素的可用宽度  不包含边框
- clientHeight：获取元素的可用高度  不包含边框
- 获取可视区域的宽度和高度，不包含边框
- offsetWidth：获取元素的整体包含边框的宽度
- offsetHeight：获取元素的整体包含边框的高度
- 获取包含边框的宽高
- 滚动条的位置
  - scrollLeft：获取水平滚动条的位置
  - scrollTop：获取垂直滚动条的位置
- 获取或设置滚动条的位置
- scrollHeight：获取可以滚动的高度
- scrollWidth：获取可以滚动的宽度

### 获取浏览器中网页的宽高  （解决兼容问题）

- document.documentElement.offsetWidth||document.body.offsetWidth//宽度
- document.documentElement.offsetHeight||document.body.offsetHeight//高度

### 无缝滚动图