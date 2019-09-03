#                                                                                                                                                                              数组

### 内存当中有序的数列，有序的内存单元

### 语法：

```javascript
var _arr=[];//声明并初始化一个数组类型的数据
```

### 声明数组

```javascript
function arr(){
	var _c;
	_c=[1,2,3,4,5]
}
```

### 查询数组方式（下标索引值）

​	console.log( arguments [ index ] );      【】中括号内的数字叫数组的下标  索引也就是数组的ID 选择器      从0开始，一次递加

### 构造函数的方式声明数组

var _arr=[];    一般情况下使用这种声明方式_

document,write();   接受的必须是字符串类型，如果不是，会发生隐式数据转换

1. 构造函数：用来构造对象

2. 构造函数一般用 new 关键字调用

3. ```javascript
   function arr(){
       _arr=new Array(1,2,3,4,5);//声明数组，并设置长度
   }
   ```

4. 构造函数的 参数数量  等于1：表示数组的长度     大于1  表示数组里的元素

### 数组的初始化

1. 手动初始化

2. 动态初始化

   1. ```javascript
      function arr(){
          var _arr=[];
          for(var i=0;i<=100;i++){
              _arr[i]=Math.random();
          }
      }
      ```

### 数组的遍历

​	length   读取数组的长度

### 引用数据类型传参  和  基础数据类型传的区别

1. 基础数据类型
   1. 储存在 **栈** 内存中（小、快）  ，一个变量就是一个内存单元
   2. **堆** 内存：大、慢
   3. 栈中储存内存地址（数组 第一个元素的 16 进制数），堆中储存数组
2. 基础数据类型传参，传递的是值
3. 引用数据类型传参，传递的是内存地址
4. 注意点：重新赋值和修改
5. 通过new 关键字创建出来的变量，全部是引用数据类型

### instanceof

​	判断  输出内容是否是规定的类型

### 数组的排序

1. ​	冒泡排序

   1. 循环求出最小值

   2. ```javascript
      function arr(){
           var _arr=[8,5,0,3,1];
           var tmp=0;
           for(var i=0;i<_arr.length;i++){
                for(var n=i;n<_arr.length;n++){
                   if(_arr[i]<_arr[n]){
                        tmp=_arr[i];
                        _arr[i]=_arr[n];
                        _arr[n]=tmp;
                   }
                }
             }
             console.log(_arr);
          }
        arr();
      ```

   3. 选择排序

   4. ```javascript
      function arr(){
         var _arr=[8,5,0,3,1];
         var tmp=0;
         for(var i=0;i<_arr.length;i++){
             var _flag=i;
             for(var n=i;n<_arr.length;n++){ 					if(_arr[_flag]>_arr[n]){
                       _flag=n;
                     }
                     tmp=_arr[i];
                     arr[i]=_arr[_flag];
                     _arr[_flag]=tmp;
              }
           }
                      console.log(_arr);
         }
          arr();
      ```

### 二维数组

​	有长和宽的数组，叫二维数组

​	二维数组的声明方式：_arr=[ [ 1,2,3,4,5 ] , [ 6,7,8,9,0 ] ];

### JSON

1. JSON是一种数据类型，是一种文件格式

   1. new  Object   声明字面量对象的语法

2. ```javascript
   var _obj=new Object();
   _obj={
       key1:"",
       key2:""
   };
   ```

### 数组的常见方法

1. concat()

   1. 链接两个或者更多的数组，并返回合并后的新数组，

   2. 不改变原数组

   3. ```javascript
      var _arr1=[8,5];
      var _arr2=[0,3,1];
      var _arr3=_arr1.concat(_arr2);
      console.log(_arr3);
      ```

2. join()

   1. 将数组的每一个元素用指定的分隔符分割、拼接成字符串，并且返回

   2. 原数组不改变

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _str=_arr.join(",");
      console.log(_str);
      ```

3. pop()

   1. 删除并返回数组的最后一个元素

   2. 原数组被改变

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr.pop();
      ```

4. push()

   1. 向数组的末尾添加一个或者更多的元素，并返回新的长度

   2. 注意   返回的是数组的长度

      1.    原数组被改变

   4. ```javascript
      var _arr=[8,5,0,3,1];
      _arr.push(8,5,0,3,1);
      console.log(_arr);
      ```

5. reverse()

   1. 颠倒数组中元素的顺序

   2. 原数组被改变

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr.reverse();
      console.log(_arr2);
      ```

6. shift()

   1. 删除并返回数组的第一个元素  

   2. 原数组被改变

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr.shift();
      console.log(_arr2);
      ```

7. slice()

   1. 从某个已有的数组返回指定的元素，至少需要一个参数start，start是一个数字，规定从何处开始选取。如果start是负数，那么它规定从数组的尾部开始算起的位置。也就是说-1指左后一个元素，-2指倒数第二个元素，以此类推。

   2. 第二个参数over 规定从何处结束选取，over 是数组结束出的数组下标。如果没有指定的over ，那么切分的数组包含从start 到数组结束处的所有元素，如果这个over 是个负数，那么它规定的是从数组尾部开始算起的元素。

   3. 不改变原数组

   4. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr.slice(2);
      
      var _arr3=_arr.slice(2,4);//不包含截取尾端的元素
      
      var _arr4=_arr.slice(-4);//截取从数组中倒数几个的元素
      
      var _arr5=_arr.slice(-4,-2);//截取从倒数第4个元素到倒数第2个元素，不包含倒数第二个		
      ```

8. sort()

   1. 对数组的元素进行排列

   2. 改变原数组

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr.sort();
      
      var _arr3=_arr.sort(function(a,b){
            return a-b;
        });//结果相同
      ```

9. splice()

   1. 删除元素，向数组添加新的元素，并返回被删除的元素

   2. 改变原数组

   3. ```javascript
      var _arr=[8,5,0,3,1];
      var _arr2=_arr,splice(0,1);//删除从0 开始到 1 的元素
      
      var _arr3=_arr.splice(0,1,100)//将从0 开始到1 结束的元素替换为 100
      ```

10. toString();

    1. 把数组转换为字符串

11. unshift()

    1. 在数组的开头添加一个或多个元素,并返回新数组的长度

    2. 改变原数组

    3. ```javascript
       var _arr=[8,5,0,3,1];
       var _arr2=_arr.unshift(0,1,2,3,4);
       //_arr=[0,1,2,3,4,8,5,0,1,3];
       //_arr2=7;
       ```

12. indexOf

    1. ES5中 新增的方法，检索元素在数组中的索引值，如果元素存在，返回索引值，如果元素不存在返回-1

    2. 不改变原数组

    3. ```javascript
       var _arr=[8,5,0,3,1];
       var _q=_arr.indexOf(0);
       ```

13. map()

    1. map方法返回一个新数组，map方法不会对空数组进行检测。map方法里面可以使用函数，形参有 value、indexOf、__arr

    2. 不会改变原数组

    3. ```javascript
       var _arr=[8,5,0,3,1];
       _arr.map(function(value,indexOf,_arr){
           console.log(value,indexOf,_arr);
       });
       
       var _arr=[8,5,0,3,1];
       _arr.map((value,indexOf,_arr)=>{
           console.log(value,indexOf,_arr);
       });
       ```

    4. 

14. reduce()

    1. ```javascript
       var _arr=[8,5,0,3,1];
       var _arr2=_arr.reduce();
       ```

    2. 

15. filter()

    1. ```javascript
       var _arr=[8,5,0,3,1];
       var _arr2=_arr.filter(function(n){
           return n>=5;
       });
       ```

    2. 