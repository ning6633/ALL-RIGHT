# CSS 3 的2D属性

transform
2D的偏移属性  transform：translate（宽，高）；

transform的属性包括：rotate()/ skew() / scale() / translate(,) ，分别还有x、y之分，比如：rotatex() 和 rotatey()

## translate【将元素向指定方向移动    类似于相对定位】

**水平移动**：向右移动translate(tx,0)和向左移动translate(-tx,0)；

**垂直移动**：向上移动translate(0,-ty)和向下移动translate(0,ty);

**对角移动**：右下角移动translate(tx,ty)、右上角移动translate(tx,-ty)、左上角移动translate(-tx,-ty)和左下角移动translate(-tx,ty)。

​	**translateX(**)：水平方向移动一个对象。对像只向X轴进行移动，如果值为正值，对像向右移动；如果值为负值，对像向左移动。

​    **translateY(**)：纵轴方向移动一个对象。对象只向Y轴进行移动，如果值为正值，对象向下移动；如果值为负值，对像向上移动。

这两个函数和前面介绍的translate()函数不同的是每个方法只接受一个值。所以，

transform:translate(-100px,0)实际上等于transform:translateX(-100px);

transform:translate(0,-100px)实际上等于transform:translateY(-100px）
**可以设置百分比       以自己的宽高为标准**

## scale【将元素以中心点进行缩放】

scale：（ X,Y）；值是倍数   可设小数

## rotate【旋转】

rotateX() 方法，元素围绕其 X 轴以给定的度数进行旋转

 不写的话    默认的是Z轴

rotateY() 方法，元素围绕其 Y 轴以给定的度数进行旋转

transparent   设置透明

## skwe【倾斜】

一个参数时：表示水平方向的倾斜角度；

两个参数时：第一个参数表示水平方向的倾斜角度，第二个参数表示垂直方向的倾斜角度

## transform-origin【改变中心原点】

​        transform-origin是变形原点，也就是该元素围绕着那个点变形或旋转，该属性只有在设置了transform属性的时候起作用；

​        因为我们元素默认基点就是其中心位置，换句话说我们没有使用transform-origin改变元素基点位置的情况下，transform进行的rotate,translate,scale,skew等操作都是以元素自己中心位置进行变化的。