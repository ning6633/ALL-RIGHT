# Regexp  正则表达式

### 正则表达式

- 也称之为规则表达式  （也就是有一定规则的表达式） **是独立于编程语言的，是很多编程语言支持正则表达式**
- 使用场景/作用：检索字符串，替换，选取。

------

### 正则表达式的基本语法

- /^.$/gmi     / 表示正则表达式的开始和结束

  - g：global   全局匹配

  - m：multiple  多行匹配

  - i：ignore  忽略大小写

  - test  方法    正则表达式。test（字符串）    不能结合变量使用

  - ```javascript
    var _regexp=/123/;
    var _str="123456789";
    if(_regex.test(_str)){//正则表达式test方法的返回值是boolean类型，用正则表达式去测字符串
        alert("true");
    }else{
        alert("false");
    }
    ```

- 用构造函数的方式来声明正则表达式  ，灵活、可以结合变量使用

  - ```javascript
    var _char="abc";
    var _regex=new RegExp("123"+_char,"");
    //比较灵活 可以结合变量使用
    ```

    

- ^^^^^^：表示匹配字符串的开头异号

  - ```javascript
    var _str="1234567890";
    var _reg=/^123/;//^从字符串的开头看有没有123
    ```

  

- $：表示匹配字符串的结尾

  - ```javascript
    var _str="1234567890";
    var _reg=/123$/;//$从字符串的结尾看有没有123
    ```

------

### 元字符

- 具有特殊意义的字符叫元字符   **可以表示规则的字符**

- 常用的元字符：

  - \ w：**word**包含**字母数字下划线**
  - \ W：非字母数字下横线
  - \ s：**space**   匹配任意空白字符（空格）
  - \ S：非空白字符
  - \ d：**digital**   0-9的数字的数字
  - \ D：非数字
  - \ b：**bound**   单词边界bound   一个单词的结束
  - \ B：非单词边界
  - 。：表示匹配任意字符   不包括\n回车  \r换行
- +：表示尽可能多的去匹配   但是匹配不到就暂停
  

match 方法：字符串.match 方法    返回数组

replace 替换         可以结合正则表达式替换所有

search  查找    可以接收字符串和正则表达式

split  分割     可以分割字符串

exec   方法：  表示执行  返回值是数组  将找到的内容放到数组的第一个元素中，第二个元素板寸的是组

  

------

  

### 正则表达式的量词

​    量词：表示的数量的元字符

​		?:    0 |1   表示匹配字符串中连续出现0次或1次

​		{number1，number2}   表示连续出现number1~number2

​		*  ：表示匹配字符串中某个字符连续出现大于等于0次

​		+ ：表示匹配字符串中某个字符连续出现大于等于1次

------

### 创建正则表达式

- / REG / GIM
  - g：global   全局匹配
  - m：multiple  多行匹配
  - i：ignore  忽略大小写
- 新的RegExp（“”，“”）;

------

### 字符串方法

- 比赛
- 搜索
- 分裂
- 更换

------

### 正则表达式量词

- ？：0个或1个
- *：0到正无穷
- +：1到正无穷
- {n}表示固定匹配n个
- {n，}表示匹配大于等于n个
- {n，m}表示匹配> = n个<= m个

------

### 正则表达式的一些符号

- （）：表示分组

  - ```javascript
    function(){
        var _str="good good study,day day up";
        var _reg=/(\w+)/g;//将字符串分组
    }
    ```

  - EegExp  $1~$9  表示分组    最多缓存9个组

- |：表示或者运算的意思  也可以用【】表示

  - 取反 【^12345678】非12345678
  - 区间 【a-z】表示从a——z的26个字母

- [^ 0234]：表示或者非0或者非2或者非3或者非4

- \u4e00-u9fa5\表示匹配中文

------

### 正则表达式的一些属性

- g：全局全局匹配
- m：多个多行匹配
- 我：忽略：忽略大小写

------

### 正则表达式元字符表

| 元字符                                                       | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| \|。将下一个字符标记符，或一个向后引用，或一个八进制转义符例如，“\ n”匹配\ n“\ n”匹配换行符序列“\”匹配“\”而“（ “则匹配‘（’。即相当于多种编程语言中都有的‘转义字符’的概念。 |                                                              |
| ^                                                            | 匹配输入字行首。如果设置了正则表达式对象的多行属性，^也匹配“\ n”个或为“\ r”之后的位置。 |
| $                                                            | 匹配输入行尾。如果设置了RegExp的对象的多行属性，$也匹配“\ n”或“\ r”之前的位置。 |
| *                                                            | 匹配前面的子表达式任意次。例如，ZO *能匹配“z”的，也能匹配“ZO”以及“动物园”。*等价于{0，}。 |
| +                                                            | 匹配前面的子表达式一次或多次（大于等于1次）。例如，“ZO +”能匹配“ZO”以及“动物园”，但不能匹配“Z”。+等价于{1，}。 |
| ？                                                           | 匹配前面的子表达式零次或一次。例如，“做（ES）？”可以匹配“做”或“不”。？等价于{0,1}。 |
| {N}                                                          | Ñ是一个非负整数。匹配确定的Ñ次。例如，“○{2}”不能匹配“鲍勃”中的“o”的，但是能匹配“食物”中的两个O操作。 |
| {N，}                                                        | Ñ是一个非负整数。至少匹配Ñ次。例如，“○{2，}”不能匹配“鲍勃”中的“o”的，但能匹配“foooood”中中的所有O操作。“○{1，}”等价于“○+”。“○{0，}”则等价于“○*”。 |
| {N，M}                                                       | 米和Ñ均为非负整数，其中N <=米。最少匹配Ñ次且最多匹配米次。例如，“○{1,3}”将匹配“fooooood”中的前三个ö为一组，后三个Ø为一组。“○{0,1}”等价于“啊？”。请注意在逗号和两个数之间不能有空格。 |
| ？                                                           | 当该字符紧跟在任何一个其他限制符（*，+，...，{N}，{N，}，{N，M}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少地匹配所搜索的字符串，而默认的贪婪模式则尽可能多地匹配所搜索的字符串。例如，对于字符串“○○○○”，“O +”将尽可能多地匹配的“o”，得到结果[“呜“]，而”o +？“将尽可能少地匹配”o“，得到结果['o'，'o'，'o'，'o'] |
| 。点                                                         | 匹配除“\ n”个和为 “\ r” 之外的任何单个字符。要匹配包括“\ n”个和为 “\ r” 在内的任何字符，请使用像“[\ S \ S]”的模式。 |
| （图案）                                                     | 匹配模式并获取这一匹配。所获取的匹配可以从产生的匹配集合得到，在VBScript中中使用子匹配集合，在JScript中中则使用$ 0 ... $ 9属性。要匹配圆括号字符，请使用“（”或“ ）”。 |
| （？：图案）                                                 | 非获取匹配，匹配模式但不获取匹配结果，不进行存储供以后使用。这在使用或字符“（）”来组合一个模式的各个部分时很有用。例如“industr（？：y |
| （？=图案）                                                  | 非获取匹配，正向肯定预查，在任何匹配图案的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“视窗（？= 95 |
| （？！图案）                                                 | 非获取匹配，正向否定预查，在任何不匹配模式的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“的Windows（？！95 |
| （？<=图案）                                                 | 非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“（？<= 95 |
| （？<！patte_n）                                             | 非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“（？<！95 |
| X \| Y                                                       | 匹配X或年。例如，“Z                                          |
| [XYZ]                                                        | 字符集合。匹配所包含的任意一个字符。例如，“[ABC]”可以匹配“平淡的”中的“A”。 |
| [^ XYZ]                                                      | 负值字符集合。匹配未包含的任意字符。例如，“[^ ABC]”可以匹配“平淡的”中的“PLIN”任一字符。 |
| [AZ]                                                         | 字符范围。匹配指定范围内的任意字符。例如，“[AZ]”可以匹配的“a”到“z”的范围内的任意小写字母字符。 |
| [^ AZ]                                                       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[^ AZ]”可以匹配任何不在“一”到“z”的范围内的任意字符。 |
| \ b                                                          | 匹配一个单词的边界，也就是指单词和空格间的位置（即正则表达式的“匹配”有两种概念，一种是匹配字符，一种是匹配位置，这里的\ b就是匹配位置的） 。例如，“ER \ b”可以匹配“从来没有”中的“儿”，但不能匹配“verb”中中的“ER”，“\ b1_”可以匹配“1_23”中的“1_”，但不能匹配“ 21_3” 中的‘1_’。 |
| \乙                                                          | 匹配非单词边界。“呃\ B”能匹配“verb”中中的“儿”，但不能匹配“从来没有”中的“ER”。 |
| \ CX                                                         | 匹配由X指明的控制字符。例如，\ cM的匹配一个控制-M或回车符.X的值必须为AZ或AZ之一。否则，将Ç视为一个原义的“C”字符。 |
| \ d                                                          | 匹配一个数字字符。等价于[0-9] .grep要加上-P，perl正则支持    |
| \ d                                                          | 匹配一个非数字字符。等价于[^ 0-9] .grep要加上-P，perl的正则支持 |
| \F                                                           | 匹配一个换页符。等价于\ X0C和\ CL。                          |
| \ n                                                          | 匹配一个换行符。等价于\ X0A和\ cJ的。                        |
| \ r                                                          | 匹配一个回车符。等价于\ X0D和\ cM的。                        |
| \ S                                                          | 匹配任何不可见字符，包括空格，制表符，换页符等等。等价于[\ f \ n \ r \ t \ v]。 |
| \ S                                                          | 匹配任何可见字符。等价于[^ \ f \ n \ r \ t \ v]。            |
| \ t                                                          | 匹配一个制表符。等价于\ X09和\ CI。                          |
| 符\ v                                                        | 匹配一个垂直制表符。等价于\ X0B和\的cK。                     |
| \ W                                                          | 匹配包括下划线的任何单词字符。类似但不等价于“[A-ZA-Z0-9_]”，这里的 “单词” 字符使用的Unicode字符集。 |
| \ W                                                          | 匹配任何非单词字符。等价于“[^ A-ZA-Z0-9_]”。                 |
| \ NUM                                                        | 匹配NUM，其中NUM是一个正整数。对所获取的匹配的引用。例如，“（。）\ 1”匹配两个连续的相同字符。 |
| \ n                                                          | 标识一个八进制转义值或一个向后引用。如果\ n之前至少Ñ个获取的子表达式，则Ñ为向后引用。否则，如果Ñ为八进制数字（0-7），则Ñ为一个八进制转义值。 |
| （）                                                         | 将（和）之间的表达式定义为“组”（group），并且将匹配这个表达式的字符保存到一个临时区域（一个正则表达式中最多可以保存9个），它们可以用\ 1到\ 9的符号来引用。 |
| \|                                                           | 将两个匹配条件进行逻辑“或”（OR）运算。例如正则表达式（他     |