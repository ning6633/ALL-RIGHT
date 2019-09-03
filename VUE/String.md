# String

### ASCLL

- ASCLL码表和字符集合

### 字符串

1. 两种字符串的声明方式
   1. var _a="";   双引号表示字符串的开头和结尾
   2. var _a=new String（“”）;  引用类型的字符串对象
2. 字符串的拼接（有length属性，和数组相同）
   1. 用  conat()  方法  原来的字符串不会被改变
   2. 用   +   拼接
3. length属性
   1. 和数组一样，可以被遍历，不能被重新赋值
4. 通过索引值访问相对应的字符   charAt(index);
5. 转义字符：\ .      \n  
   1. 元字符：具有特殊意义

### 常见方法

1. --charAt()  返回指定索引值的位置

   1. ```javascript
      var _ind="qwer";
      console.log(_ind.charAt(3));
      ```

2. --charCodeAt()    返回指定索引位置字符的Unicode值   把字符转换为ASC码值

   1. ```javascript
      var _ind="qwer";
      console.log(_ind.charCodeAt(0));
      console.log("a".charCodeAt());
      ```

3. --concat()  链接两个或者多个字符串，返回连接后的字符串数组也有这个方法

   1. ```javascript
      var _ind="qwer";
      var _ind2=_ind.concat("12345678");
      console.log(_ind2);
      ```

4. --FromCharCode()  将Unicode转换为字符串，把ASC码值转换为字符，前面是String   是静态类的方法

   1. ```javascript
      var _ind="qwer";
      console.log(FromCharCode(_ind));
      console.log(String.fromCharCode("65"));
      ```

5. --indexOf()  返回字符串中检索的指定字符第一次出现的位置

   1. ```javascript
      var _ind="qwer";
      console.log(_ind.indexOf("r"));
      ```

6. --lastindexOf()     返回字符串中检索的指定字符最后一次出现的位置

   1. ```javascript
      var _ind="qwer";
      console.log(_ind.lastindexOf("e"));
      ```

7. --localeCompare()   用本地特定的顺序来比较两个字符串

   1. ```javascript
      var _ind="qwer";
      
      ```

8. --match()    找到一个或多个正则表达式的匹配

   1. ```javascript
      var _ind="qwer";
      var _ind2=_ind.match(/q/g);
      ```

9. --replace()   替换与正则表达式匹配的字符

   1. ```javascript
      var _ind="qwer";
      console.log(_ind.replace(/q/g,"a"));
      ```

10. --search()    检索与正则表达式相匹配的值    返回值是字符串下标

    1. ```javascript
       var _ind="qwer";
       console.log(_ind.search(/q/g));
       ```

11. --slice()   提取字符串的片段，并在新的字符串中返回被提取的部分,两个值

    1. ```javascript
       var _ind="qwer";
       console.log(_ind.slice(1,3));
       ```

12. --split()      用一个字符，把字符串分割为字符串**数组**

    1. ```javascript
       var _ind="qwer";
       var _ind2=_ind.split("");//将每一个字符分割
       var _ind3=_ind.split("");
       ```

13. --substring()   提取字符串中两个指定的索引号之间的字符，不包含最后一个

    1. ```javascript
       var _ind="qwer";
       console.log(_ind.substring(1,4));
       ```

14. --substr()       提取字符串中两个指定索引值之间的字符，包含最后一个

    1. ```javascript
       var _ind="qwer";
       console.log(_ind.substr(1,3));
       ```

15. --toLowerCase()    把字符串转换为小写

    1. ```javascript
       var _ind="qwer";
       console.log(_ind.toLowerCase());
       console.log(_ind[0].toUpperCase()+_ind.slice(1).toLowerCase());
       ```

16. --toUpperCase()   把字符串转换为大写

    1. ```javascript
       var _ind="qwer";
       console.log(_ind[0].toUpperCase()+_ind.slice(1).toLowerCase());
       ```

17. --toString()   返回字符串对象值（将数组或者字面量转换为字符串）

18. --trim()   移除字符串首尾空白

