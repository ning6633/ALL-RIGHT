#  BFC

Block   formatting  context   
块级格式化上下文
是一个独立的渲染去
专门定义块元素的布局规则，只有块元素能参与，与web没有关系

**相当于规划块元素的位置**

## 布局

1、内部的 Box 会在垂直方向，一个人接一个的放置
2、Box  垂直方向的距离由  margin 决定，**属于同一个BFC的两个相邻 Box 的		margin 会发生重叠**
3、每个元素的  margin  box  的左边，与包含块 boeder box 的左边相接触
4、**BFC 的区域不会与 float  box 重叠**
5、BFC就是页面上的一个隔离的独立容器。容器里的子元素不会影响到外面的		元素    **BFC和BFC之间不会相互影响**
6、**计算BFC的高度时，浮动元素也参与计算**

## 触发BFC

1、根元素（html）
2、float属性不为none
3、position为 absolute 或fixed
4、display为inlin-black   table-cell  table-caption  flex  inline-flex
5、overflow  不为visible  

## 作用

1、自适应两栏布局
		左边固定  右边随着了浏览器变化
2、清除自己受内部浮动的影响
3、防止margin上下重叠

