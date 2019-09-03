# jQuery

jQuery  API 一点几    可以兼容IE低版本浏览器

### jQuery是什么东西？

- jQuery就是原生JavaScript方法库
  - 也就是说jQuery已经封装好了很多JavaScript的方法，可以直接用
- jQuery的理念是：用很少的代码做很多事。
- jQuery 是对JS代码的二次封装

### 使用

- $("#aaa")    该方法返回一个人jQuery对象，该对象中包含ID为 aaa的 DOM元素。
- 先引入   jQuery文件      
- jQuery可以和原生JavaScript进行无缝连接   （本身就是原生JS）

### jQuery学习

- 选择器很多，全部和CSS选择器写法相同
-  $("#demo,.demo")
- jQuery对象   类似于 数组的结构
- “  *  ”   星号  表示通配  获取所有
- equal   表示等于
- $gt  表示大于号
- $lt   表示小于号
- html  标签都有  lang 属性
- $( function(){});  等同于  window.onload
- attr   和    getAttribute\setAttribute  相同
  - $("body")[0].attr("id");  获取ID
  - $("body")[0].attr("id","demo");  给body设置一个ID，ID名为demo
- html==innerHTML
- text==innerText

### 链式调用

​	对象的链式调用

```javascript
function fn(){
    return fn;
}

fn().().();
```

## 案例

- append

  - ```javascript
    $("p").append("<h1>123123</h1>"):
    ```

    将h1  标签插入   p  标签定中

  - ```javascript
    $("p").appendTo("<div></div>");
    ```

    将  p  标签插入  div 标签当中

- prepend

  - ```javascript
    $("p").prepend("<i>青莲地心火</i>");
    ```

    将   i  标签插入到  p  标签当中，并且作为第一个子元素

  - ```javascript
    $("p");.prependTo("<div><//div>");
    ```

    将匹配到的元素 添加到  div  里，并且作为第一个子元素

- after

  - ```javascript
    $("p").after("<i>陨落心炎</i>");
    ```

    在匹配到的每一个元素后面加上  i  标签

- befor

  - ```javascript
    $("p").before("<i>三千炎炎火</i>");
    ```

    在匹配到的每一个元素前面添加上  i  标签

- insertAfter

  - ```javascript
    $("p").insetAfter("<div>净莲妖火</div>");
    ```

    将所有匹配到的标签插入  div  之后

- insertBefore

  - ```javascript
    $("p").insertBefore("<div>虚无吞炎</div>");
    ```

    将 所有匹配到的标签插入  div  之前

- wrap

  - ```javascript
    $("p").wrap("<div>金帝焚天炎</div>");
    ```

    把匹配到的所有元素用   **金帝焚天炎**  包裹起来

- unwrap

  - ```javascript
    $("p").unwrap("div");
    ```

    匹配到的每一个元素的父元素  如果是 div  那么删除它

- wrapAll

  - ```javascript
    $("p").wrapAll("<div>生灵之炎</div>");
    ```

    将匹配上的每一个元素用  **生灵之炎**  包裹起来

- replaceWith

  - ```javascript
    $("p").replaceWith("<div>八荒破灭炎</div>");
    ```

    将匹配上的每一个元素逐个替换为 **八荒破灭炎**

- replaceAll

  - ```javascripr
    $("<b>九幽金祖火<b>").replalceAll("p");
    ```

    用 **九幽金祖火** 一个一个替换掉   

- .hide(2000,function(){  } )

  - 动画效果   从有到无

     

- .show();

  - 同上   显示

- .slideDown

  - 下拉效果   同上

- .slideUp

  - 上拉效果   同上

- .fadeIn

  - 淡入   同上   透明度

- .fadeOut

  - 淡出   同上

- .fadeTo(2000,0.5);

  - 2s 透明度达到0.5     可以指定透明度

- animate({要的效果},time);



### 作业

1. 点击下拉    点击收回
2. swiper      轮播图
   1. 下载   样式文件  源码文件   引入文件   JS CSS
   2. 创建基本结构   swiper-container    swiper-wrapper   swiper-slider  
   3. 实例化swiper
      1. new Swiper(".swiper-container",{   配置项  });