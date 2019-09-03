# sass  scss

1. 格式的区别

2. 可以做样式的嵌套  

3. reset.scss文件 样式重置    在scss  文件中  @import 'reset.scss'

4. 静默注释

5. 混入混出 （函数）

   1. @mixin  name 声明

      1. ```javascript
         @mixin  hehe（$qqq）{
             width:;
             height:;
         }
         
         
         @include hehe(red)
         ```

         

   2. @include  name

6. 继承

   1. @extend  name

      1. ```javascript
         .demo{
             width:;
             height:;
         }
         
         .demo2{
             @extend .demo;
         }
         ```

7. 条件语句

   1. ```javascript
      @if  条件{
          
      }@else{
          
      }
      ```

8. for循环

   1. ```javascript
      @each  循环数组
      ```

   2. ```javascript
      @for $__  from  1  through  100 (
      	.id:nth-child(#{$__}){
          background:
          };
      )
      ```

9. varble

   1. 将变量写在varble.scss中
   2. mixin.scss  变量打包
   3. reset.scss  重置打包 

10. js的方式来写css

    1. 变量  $name:value;
    2. 嵌套  和dom内嵌套保持一致
    3. 引入文件  @import
    4. @mixin( 形参){}
    5. 继承   @extend
    6. 运算   所有的数值类型都可以进行简单的运算

